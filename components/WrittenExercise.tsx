
import React, { useState } from 'react';
import { getCorrectionFeedback } from '../services/geminiService';
import { SparklesIcon } from './icons/SparklesIcon';

interface WrittenExerciseProps {
  exercise: {
    title: string;
    consigna: string;
  };
  onComplete: () => void;
}

const WrittenExercise: React.FC<WrittenExerciseProps> = ({ exercise, onComplete }) => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!userInput.trim()) {
      setError('Por favor, escribe una respuesta antes de enviar.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setFeedback(null);
    try {
      const result = await getCorrectionFeedback(exercise.consigna, userInput);
      setFeedback(result);
      onComplete();
    } catch (err) {
      setError('Hubo un error al obtener la corrección. Inténtalo de nuevo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Basic markdown to HTML converter
  const formatFeedback = (text: string) => {
    return text
      .replace(/### (.*)/g, '<h3 class="text-xl font-bold mt-6 mb-2 text-indigo-700">$1</h3>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\* (.*)/g, '<li class="ml-4">$1</li>')
      .replace(/(?:\r\n|\r|\n){2,}/g, '<br/>')
      .replace(/`([^`]+)`/g, '<code class="bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded-md text-sm">$1</code>')
      .replace(/<li/g, '<ul class="list-disc list-inside space-y-2"><li')
      .replace(/<\/li>(?!<li)/g, '</li></ul>');
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-slate-800">{exercise.title}</h3>
      <div className="mt-4 p-4 bg-slate-100 border-l-4 border-indigo-500 rounded-r-lg">
        <p className="text-slate-700 font-semibold">Consigna:</p>
        <p className="text-slate-600 italic">"{exercise.consigna}"</p>
      </div>

      <div className="mt-6">
        <label htmlFor="user-input" className="block text-sm font-medium text-slate-700 mb-2">
          Tu respuesta:
        </label>
        <textarea
          id="user-input"
          rows={5}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="Escribe tu texto aquí..."
          disabled={isLoading}
        />
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-wait transition-all duration-300"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analizando...
            </>
          ) : (
            <>
              <SparklesIcon className="w-5 h-5" />
              Corregir con IA
            </>
          )}
        </button>
      </div>
      
      {feedback && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: formatFeedback(feedback) }} />
        </div>
      )}
    </div>
  );
};

export default WrittenExercise;
