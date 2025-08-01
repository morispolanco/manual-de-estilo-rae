
import React, { useState } from 'react';
import type { Module, Lesson, UserProgress } from '../types';
import Quiz from './Quiz';
import WrittenExercise from './WrittenExercise';

interface ModuleViewProps {
  module: Module;
  onBack: () => void;
  userProgress: UserProgress;
  updateProgress: (moduleId: number, lessonId: string, activity: 'quiz' | 'exercise', score?: number) => void;
}

const ModuleView: React.FC<ModuleViewProps> = ({ module, onBack, userProgress, updateProgress }) => {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(module.lessons[0]?.id || null);
  const [activeActivity, setActiveActivity] = useState<{ type: 'quiz' | 'exercise', lesson: Lesson } | null>(null);

  const handleStartQuiz = (lesson: Lesson) => {
    setActiveActivity({ type: 'quiz', lesson });
  };

  const handleStartExercise = (lesson: Lesson) => {
    setActiveActivity({ type: 'exercise', lesson });
  };
  
  const handleCompleteQuiz = (lessonId: string, score: number) => {
    updateProgress(module.id, lessonId, 'quiz', score);
    setActiveActivity(null);
  };
  
  const handleCompleteExercise = (lessonId: string) => {
    updateProgress(module.id, lessonId, 'exercise');
    // We keep the feedback visible, so we don't nullify activeActivity here unless we add a specific close button.
  };

  if (activeActivity) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={() => setActiveActivity(null)} className="mb-6 text-indigo-600 hover:text-indigo-800 font-semibold">
          &larr; Volver a la lección
        </button>
        {activeActivity.type === 'quiz' && activeActivity.lesson.quiz && (
          <Quiz questions={activeActivity.lesson.quiz} onComplete={(score) => handleCompleteQuiz(activeActivity.lesson.id, score)} />
        )}
        {activeActivity.type === 'exercise' && activeActivity.lesson.exercise && (
          <WrittenExercise exercise={activeActivity.lesson.exercise} onComplete={() => handleCompleteExercise(activeActivity.lesson.id)} />
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button onClick={onBack} className="mb-6 text-indigo-600 hover:text-indigo-800 font-semibold">
        &larr; Volver a todos los módulos
      </button>
      <header className="mb-8 p-6 bg-white rounded-xl shadow-md border border-slate-200">
        <div className="flex items-start gap-4">
            <div className="bg-indigo-100 text-indigo-600 rounded-lg p-3 hidden sm:block">
              <module.icon className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800">{module.title}</h2>
              <p className="text-slate-600 mt-2">{module.longDescription}</p>
            </div>
        </div>
      </header>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/3 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-3 text-slate-700">Lecciones</h3>
          <nav className="space-y-2">
            {module.lessons.map(lesson => (
              <button
                key={lesson.id}
                onClick={() => setActiveLessonId(lesson.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors duration-200 flex justify-between items-center ${activeLessonId === lesson.id ? 'bg-indigo-600 text-white font-semibold' : 'hover:bg-slate-200 text-slate-700'}`}
              >
                <span>{lesson.title}</span>
                {(userProgress[module.id]?.[lesson.id]?.quizCompleted || userProgress[module.id]?.[lesson.id]?.exerciseCompleted) && (
                    <span className="text-green-300">✓</span>
                )}
              </button>
            ))}
          </nav>
        </aside>
        <main className="flex-1 md:w-2/3 lg:w-3/4">
          {module.lessons.filter(l => l.id === activeLessonId).map(lesson => (
            <article key={lesson.id} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{lesson.title}</h3>
              <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: lesson.content }} />
              
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
                {lesson.quiz && (
                  <button onClick={() => handleStartQuiz(lesson)} className="w-full sm:w-auto flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                    Realizar cuestionario {userProgress[module.id]?.[lesson.id]?.quizCompleted && '✓'}
                  </button>
                )}
                {lesson.exercise && (
                  <button onClick={() => handleStartExercise(lesson)} className="w-full sm:w-auto flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition">
                    Práctica de escritura {userProgress[module.id]?.[lesson.id]?.exerciseCompleted && '✓'}
                  </button>
                )}
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ModuleView;