import React from 'react';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
    onHomeClick: () => void;
    onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onAdminClick }) => {
    const { user, logout } = useAuth();
    
    return (
        <header className="bg-white shadow-md sticky top-0 z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <button onClick={onHomeClick} className="flex items-center gap-3 text-slate-800 hover:text-indigo-600 transition-colors">
                        <BookOpenIcon className="w-8 h-8 text-indigo-600" />
                        <div>
                            <h1 className="text-xl font-bold">Dominio Panhispánico</h1>
                            <p className="text-xs text-slate-500 -mt-1">Tu guía RAE de estilo</p>
                        </div>
                    </button>
                    <div className="flex items-center gap-4">
                        {user && (
                            <>
                                <span className="text-sm text-slate-600 hidden sm:inline">
                                    Bienvenido, <span className="font-semibold">{user.username}</span>
                                </span>
                                {user.username === 'admin' && (
                                    <button
                                        onClick={onAdminClick}
                                        className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                                    >
                                        Admin
                                    </button>
                                )}
                                <button
                                    onClick={logout}
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                                >
                                    Cerrar sesión
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;