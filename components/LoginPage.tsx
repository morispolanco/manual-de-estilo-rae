
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BookOpenIcon } from './icons/BookOpenIcon';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, loading } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
            <div className="w-full max-w-md">
                <div className="w-full p-8 space-y-8 bg-white rounded-2xl shadow-lg">
                    <div className="text-center">
                        <BookOpenIcon className="w-16 h-16 mx-auto text-indigo-600" />
                        <h1 className="mt-4 text-3xl font-bold text-slate-800">Dominio Panhispánico</h1>
                        <p className="mt-2 text-slate-500">Inicia sesión para continuar tu aprendizaje</p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">Nombre de usuario</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Nombre de usuario"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Contraseña</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Contraseña"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
                                {error}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="mt-4 text-center text-sm text-slate-600 p-4 bg-slate-100/80 rounded-lg border border-slate-200/80">
                    <p>
                        Para explorar, puedes usar la cuenta de demostración:
                    </p>
                    <p className="mt-1">
                        Usuario: <strong className="font-semibold text-slate-800">demo</strong> / Contraseña: <strong className="font-semibold text-slate-800">demo123</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;