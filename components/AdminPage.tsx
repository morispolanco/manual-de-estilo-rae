
import React, { useState, useEffect } from 'react';
import { db } from '../services/db';
import type { UserDetails } from '../services/db';
import { MODULES } from '../constants';
import { TrashIcon } from './icons/TrashIcon';
import { PencilSquareIcon } from './icons/PencilSquareIcon';

const EditUserModal: React.FC<{
    user: UserDetails;
    onClose: () => void;
    onSave: () => void;
}> = ({ user, onClose, onSave }) => {
    const [password, setPassword] = useState('');
    const [allowedModules, setAllowedModules] = useState<number[]>(user.allowedModules ?? MODULES.map(m => m.id));

    const handleModuleToggle = (moduleId: number) => {
        setAllowedModules(prev =>
            prev.includes(moduleId)
                ? prev.filter(id => id !== moduleId)
                : [...prev, moduleId]
        );
    };

    const handleSelectAll = (select: boolean) => {
        setAllowedModules(select ? MODULES.map(m => m.id) : []);
    };

    const handleSaveChanges = async () => {
        const updateData: { password_plaintext?: string; allowedModules?: number[] } = {};
        if (password.trim()) {
            updateData.password_plaintext = password;
        }
        // If all modules are selected, store `undefined` to signify no restrictions
        updateData.allowedModules = allowedModules.length === MODULES.length ? undefined : allowedModules;

        await db.updateUser(user.username, updateData);
        onSave();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-bold text-slate-800">Editar Usuario: <span className="text-indigo-600">{user.username}</span></h3>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Contraseña (dejar en blanco para no cambiar)</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Nueva contraseña"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Módulos Permitidos</label>
                        <div className="flex gap-4 mb-3 border-b pb-3">
                            <button onClick={() => handleSelectAll(true)} className="text-xs font-medium text-indigo-600 hover:underline">Seleccionar todos</button>
                            <button onClick={() => handleSelectAll(false)} className="text-xs font-medium text-indigo-600 hover:underline">Deseleccionar todos</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-h-48 overflow-y-auto pr-2">
                            {MODULES.map(module => (
                                <label key={module.id} className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={allowedModules.includes(module.id)}
                                        onChange={() => handleModuleToggle(module.id)}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <span className="text-sm text-slate-600">{module.title}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 px-6 py-4 flex justify-end gap-3 rounded-b-xl">
                    <button onClick={onClose} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition">Cancelar</button>
                    <button onClick={handleSaveChanges} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Guardar Cambios</button>
                </div>
            </div>
        </div>
    );
};

const AdminPage: React.FC = () => {
    const [users, setUsers] = useState<UserDetails[]>([]);
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [editingUser, setEditingUser] = useState<UserDetails | null>(null);

    const fetchUsers = async () => {
        const userList = await db.getUsers();
        setUsers(userList);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        if(!newUsername.trim() || !newPassword.trim()) {
            setMessage({ type: 'error', text: 'El nombre de usuario y la contraseña no pueden estar vacíos.' });
            return;
        }

        const success = await db.addUser(newUsername, newPassword);
        if (success) {
            setMessage({ type: 'success', text: `Usuario '${newUsername}' creado con éxito.` });
            setNewUsername('');
            setNewPassword('');
            fetchUsers();
        } else {
            setMessage({ type: 'error', text: `El usuario '${newUsername}' ya existe.` });
        }
    };

    const handleDeleteUser = async (username: string) => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar al usuario '${username}'? Esta acción es irreversible.`)) {
            await db.deleteUser(username);
            fetchUsers();
        }
    };

    const handleSaveFromModal = () => {
        setEditingUser(null);
        fetchUsers();
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-slate-800">Panel de Administración</h2>
                <p className="mt-2 text-slate-600">Gestiona los usuarios de la plataforma.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* Add User Form */}
                    <div className="border rounded-lg p-6 self-start">
                        <h3 className="text-xl font-semibold text-slate-700 mb-4">Añadir Nuevo Usuario</h3>
                        <form onSubmit={handleAddUser} className="space-y-4">
                             <div>
                                <label htmlFor="new-username" className="block text-sm font-medium text-slate-700">Nombre de usuario</label>
                                <input id="new-username" type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="new-password"className="block text-sm font-medium text-slate-700">Contraseña</label>
                                <input id="new-password" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Crear Usuario
                            </button>
                            {message && <p className={`text-sm mt-2 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{message.text}</p>}
                        </form>
                    </div>

                    {/* User List */}
                    <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-slate-700 mb-4">Lista de Usuarios</h3>
                        <div className="max-h-96 overflow-y-auto">
                            <ul className="divide-y divide-slate-200">
                                {users.map(user => (
                                    <li key={user.username} className="py-3 px-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <p className="font-semibold text-slate-800">
                                                {user.username}
                                                {user.username === 'admin' && <span className="text-xs bg-indigo-100 text-indigo-700 font-medium ml-2 px-2 py-0.5 rounded-full align-middle">Admin</span>}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Acceso: {user.allowedModules ? `Módulos ${user.allowedModules.join(', ')}` : 'Todos los módulos'}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                            <button onClick={() => setEditingUser(user)} disabled={user.username === 'admin'} className="p-2 text-slate-500 hover:text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition rounded-md hover:bg-slate-100">
                                                <PencilSquareIcon className="w-5 h-5"/>
                                            </button>
                                            <button onClick={() => handleDeleteUser(user.username)} disabled={user.username === 'admin'} className="p-2 text-slate-500 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition rounded-md hover:bg-red-50">
                                                <TrashIcon className="w-5 h-5"/>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {editingUser && <EditUserModal user={editingUser} onClose={() => setEditingUser(null)} onSave={handleSaveFromModal} />}
        </div>
    );
};

export default AdminPage;
