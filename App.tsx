
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ModuleView from './components/ModuleView';
import AdminPage from './components/AdminPage';
import { MODULES } from './constants';
import type { UserProgress } from './types';

type AppView = 'dashboard' | 'module' | 'admin';

function AuthenticatedApp() {
    const [view, setView] = useState<AppView>('dashboard');
    const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
    const { user, progress, updateProgress } = useAuth();
    
    const selectedModule = MODULES.find(m => m.id === selectedModuleId);
    
    // This effect handles cases where a user might be viewing a module
    // that becomes inaccessible (not really possible in current setup, but good practice).
    useEffect(() => {
        if(view === 'module' && selectedModuleId !== null && !selectedModule) {
            setView('dashboard');
            setSelectedModuleId(null);
        }
    }, [view, selectedModuleId, selectedModule]);


    const handleSelectModule = useCallback((id: number) => {
        setSelectedModuleId(id);
        setView('module');
    }, []);

    const handleBackToDashboard = useCallback(() => {
        setSelectedModuleId(null);
        setView('dashboard');
    }, []);
    
    const mainContent = () => {
        if (user?.username === 'admin' && view === 'admin') {
            return <AdminPage />;
        }
        if (view === 'module' && selectedModule) {
            return (
                <ModuleView
                    module={selectedModule}
                    onBack={handleBackToDashboard}
                    userProgress={progress}
                    updateProgress={updateProgress}
                />
            );
        }
        // Default to dashboard for admin if not in admin view, or for any other user
        return (
            <Dashboard
                modules={MODULES}
                onSelectModule={handleSelectModule}
                userProgress={progress}
                allowedModules={user?.allowedModules}
            />
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header onHomeClick={handleBackToDashboard} onAdminClick={() => setView('admin')} />
            <main className="flex-grow">{mainContent()}</main>
            <footer className="text-center py-6 text-sm text-slate-500 border-t mt-12">
                <p>&copy; {new Date().getFullYear()} Dominio Panhispánico. Basado en el "Libro de estilo" de la RAE.</p>
            </footer>
        </div>
    );
}

function AppContent() {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-slate-50 text-slate-700">
                <div className="flex items-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Cargando aplicación...
                </div>
            </div>
        );
    }
    
    return user ? <AuthenticatedApp /> : <LoginPage />;
}

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
};

export default App;
