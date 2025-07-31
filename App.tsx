
import React, { useState, useCallback, useEffect } from 'react';
import type { UserProgress } from './types';
import { MODULES } from './constants';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ModuleView from './components/ModuleView';

type View = 'dashboard' | 'module';

const App: React.FC = () => {
    const [view, setView] = useState<View>('dashboard');
    const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
    
    const [userProgress, setUserProgress] = useState<UserProgress>(() => {
        try {
            const savedProgress = localStorage.getItem('userProgress');
            return savedProgress ? JSON.parse(savedProgress) : {};
        } catch (error) {
            console.error("Could not load user progress from localStorage", error);
            return {};
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('userProgress', JSON.stringify(userProgress));
        } catch (error) {
            console.error("Could not save user progress to localStorage", error);
        }
    }, [userProgress]);

    const handleSelectModule = useCallback((id: number) => {
        setSelectedModuleId(id);
        setView('module');
    }, []);

    const handleBackToDashboard = useCallback(() => {
        setSelectedModuleId(null);
        setView('dashboard');
    }, []);

    const handleUpdateProgress = useCallback((moduleId: number, lessonId: string, activity: 'quiz' | 'exercise', score?: number) => {
        setUserProgress(prev => {
            const newProgress = JSON.parse(JSON.stringify(prev)); // Deep copy
            if (!newProgress[moduleId]) {
                newProgress[moduleId] = {};
            }
            if (!newProgress[moduleId][lessonId]) {
                newProgress[moduleId][lessonId] = {};
            }

            if (activity === 'quiz') {
                newProgress[moduleId][lessonId].quizCompleted = true;
                newProgress[moduleId][lessonId].quizScore = score;
            } else if (activity === 'exercise') {
                newProgress[moduleId][lessonId].exerciseCompleted = true;
            }

            return newProgress;
        });
    }, []);


    const selectedModule = MODULES.find(m => m.id === selectedModuleId);

    return (
        <div className="min-h-screen bg-slate-50">
            <Header onHomeClick={handleBackToDashboard} />
            <main>
                {view === 'dashboard' ? (
                    <Dashboard modules={MODULES} onSelectModule={handleSelectModule} userProgress={userProgress} />
                ) : selectedModule ? (
                    <ModuleView 
                        module={selectedModule} 
                        onBack={handleBackToDashboard}
                        userProgress={userProgress}
                        updateProgress={handleUpdateProgress}
                    />
                ) : (
                    <div className="text-center py-20">
                        <p>Módulo no encontrado. Por favor, vuelve al inicio.</p>
                        <button onClick={handleBackToDashboard} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
                            Volver al inicio
                        </button>
                    </div>
                )}
            </main>
            <footer className="text-center py-6 text-sm text-slate-500 border-t mt-12">
                <p>&copy; {new Date().getFullYear()} Dominio Panhispánico. Basado en el "Libro de estilo" de la RAE.</p>
            </footer>
        </div>
    );
};

export default App;
