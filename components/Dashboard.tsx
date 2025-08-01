
import React from 'react';
import type { Module, UserProgress } from '../types';
import { LockClosedIcon } from './icons/LockClosedIcon';

interface DashboardProps {
  modules: Module[];
  onSelectModule: (id: number) => void;
  userProgress: UserProgress;
  allowedModules?: number[];
}

const ModuleCard: React.FC<{ module: Module; onClick: () => void; progress: number, isLocked: boolean }> = ({ module, onClick, progress, isLocked }) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-xl shadow-lg overflow-hidden transform ${
        isLocked 
        ? 'cursor-not-allowed opacity-70' 
        : 'hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 group'
    }`}
    aria-disabled={isLocked}
  >
    <div className="p-6">
      <div className="flex items-start gap-4">
        <div className={`rounded-lg p-3 ${isLocked ? 'bg-slate-100 text-slate-400' : 'bg-indigo-100 text-indigo-600'}`}>
          <module.icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-bold ${isLocked ? 'text-slate-500' : 'text-slate-800 group-hover:text-indigo-700 transition-colors'}`}>{module.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{module.description}</p>
        </div>
        {isLocked && (
            <div className="flex-shrink-0" title="Módulo bloqueado">
                <LockClosedIcon className="w-5 h-5 text-slate-400" aria-hidden="true" />
            </div>
        )}
      </div>
    </div>
    <div className="bg-slate-50 px-6 py-3">
        <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-xs text-slate-500 text-right mt-1">{Math.round(progress)}% completado</p>
    </div>
  </div>
);

const Dashboard: React.FC<DashboardProps> = ({ modules, onSelectModule, userProgress, allowedModules }) => {
  const calculateModuleProgress = (moduleId: number) => {
    const moduleProg = userProgress[moduleId];
    if (!moduleProg) return 0;

    const moduleData = modules.find(m => m.id === moduleId);
    if (!moduleData) return 0;
    
    const totalActivities = moduleData.lessons.reduce((acc, lesson) => {
        if(lesson.quiz) acc++;
        if(lesson.exercise) acc++;
        return acc;
    }, 0);

    if (totalActivities === 0) return 0;

    const completedActivities = Object.values(moduleProg).reduce((acc, lessonProg) => {
        if (lessonProg.quizCompleted) acc++;
        if (lessonProg.exerciseCompleted) acc++;
        return acc;
    }, 0);

    return (completedActivities / totalActivities) * 100;
  };

  const totalProgress = modules.reduce((sum, module) => sum + calculateModuleProgress(module.id), 0) / modules.length;

  const isModuleLocked = (moduleId: number) => {
    // If allowedModules is undefined, no restrictions apply, so nothing is locked.
    if (allowedModules === undefined) {
      return false;
    }
    // If restrictions exist, check if the module ID is in the allowed list.
    return !allowedModules.includes(moduleId);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 p-6 bg-white rounded-xl shadow-md border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">Bienvenido a Dominio Panhispánico</h2>
        <p className="text-slate-600 mt-2">Selecciona un módulo para comenzar tu viaje de aprendizaje y perfeccionar tu dominio del español.</p>
        <div className="mt-4">
            <h4 className="text-sm font-semibold text-slate-700">Progreso general</h4>
            <div className="w-full bg-slate-200 rounded-full h-4 mt-2">
                <div className="bg-green-500 h-4 rounded-full flex items-center justify-end text-white text-xs pr-2" style={{ width: `${totalProgress}%` }}>
                    {Math.round(totalProgress)}%
                </div>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(module => {
          const isLocked = isModuleLocked(module.id);
          return (
             <ModuleCard
                key={module.id}
                module={module}
                onClick={() => !isLocked && onSelectModule(module.id)}
                progress={calculateModuleProgress(module.id)}
                isLocked={isLocked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;