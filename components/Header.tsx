
import React from 'react';
import { BookOpenIcon } from './icons/BookOpenIcon';

interface HeaderProps {
    onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <button onClick={onHomeClick} className="flex items-center gap-3 text-slate-800 hover:text-indigo-600 transition-colors">
                        <BookOpenIcon className="w-8 h-8 text-indigo-600" />
                        <div>
                            <h1 className="text-xl font-bold">Dominio Panhispánico</h1>
                            <p className="text-xs text-slate-500 -mt-1">Tu Guía RAE de Estilo</p>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
