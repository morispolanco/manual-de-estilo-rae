import React, { useState, useEffect } from 'react';
import { db } from '../services/db';

const AdminPage: React.FC = () => {
    const [users, setUsers] = useState<string[]>([]);
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
            fetchUsers(); // Refresh user list
        } else {
            setMessage({ type: 'error', text: `El usuario '${newUsername}' ya existe.` });
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-slate-800">Panel de Administración</h2>
                <p className="mt-2 text-slate-600">Gestiona los usuarios de la plataforma.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Add User Form */}
                    <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-slate-700 mb-4">Añadir Nuevo Usuario</h3>
                        <form onSubmit={handleAddUser} className="space-y-4">
                            <div>
                                <label htmlFor="new-username" className="block text-sm font-medium text-slate-700">Nombre de usuario</label>
                                <input
                                    id="new-username"
                                    type="text"
                                    value={newUsername}
                                    onChange={e => setNewUsername(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="new-password"className="block text-sm font-medium text-slate-700">Contraseña</label>
                                <input
                                    id="new-password"
                                    type="password"
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Crear Usuario
                            </button>
                            {message && (
                                <p className={`text-sm mt-2 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                    {message.text}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* User List */}
                    <div className="border rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-slate-700 mb-4">Lista de Usuarios</h3>
                        <div className="max-h-60 overflow-y-auto">
                            <ul className="divide-y divide-slate-200">
                                {users.map(user => (
                                    <li key={user} className="py-3 px-2">
                                        {user} {user === 'admin' && <span className="text-xs bg-indigo-100 text-indigo-700 font-medium ml-2 px-2 py-0.5 rounded-full">Admin</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
