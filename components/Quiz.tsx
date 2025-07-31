
import React, { useState } from 'react';
import type { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswerIndex ? acc + 1 : acc;
    }, 0);
    onComplete((score / questions.length) * 100);
  };

  if (!questions || questions.length === 0) {
    return <div>No hay preguntas disponibles.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  if (isSubmitted) {
    const score = userAnswers.filter((answer, index) => answer === questions[index].correctAnswerIndex).length;
    return (
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-center text-indigo-700">Resultados del Cuestionario</h3>
        <p className="text-center text-slate-600 mt-2">
          Has acertado {score} de {questions.length} preguntas.
        </p>
        <div className="mt-8 space-y-6">
          {questions.map((q, index) => (
            <div key={q.id} className="border-t pt-4">
              <p className="font-semibold">{index + 1}. {q.question}</p>
              <div className="mt-2 space-y-2">
                {q.options.map((option, optionIndex) => {
                  const isCorrect = optionIndex === q.correctAnswerIndex;
                  const isUserChoice = userAnswers[index] === optionIndex;
                  const isIncorrectChoice = isUserChoice && !isCorrect;

                  let bgColor = 'bg-slate-100';
                  if (isCorrect) bgColor = 'bg-green-100 border-green-500';
                  if (isIncorrectChoice) bgColor = 'bg-red-100 border-red-500';

                  return (
                    <div key={optionIndex} className={`p-3 rounded-lg border ${bgColor}`}>
                      <p className={`${isCorrect ? 'font-bold text-green-800' : ''} ${isIncorrectChoice ? 'text-red-800' : ''}`}>
                        {option}
                        {isCorrect && ' ✓'}
                        {isIncorrectChoice && ' ✗'}
                      </p>
                    </div>
                  );
                })}
              </div>
              {userAnswers[index] !== q.correctAnswerIndex && (
                 <div className="mt-3 p-3 bg-yellow-50 border border-yellow-300 rounded-lg text-sm text-yellow-800">
                    <strong>Explicación:</strong> {q.explanation}
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
      <div className="mb-4">
        <p className="text-sm text-slate-500">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
        <h3 className="text-xl sm:text-2xl font-bold mt-1">{currentQuestion.question}</h3>
      </div>
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200
              ${selectedAnswer === index
                ? 'bg-indigo-100 border-indigo-500 ring-2 ring-indigo-300'
                : 'bg-white hover:bg-slate-50 border-slate-300 hover:border-indigo-400'
              }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Anterior
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={selectedAnswer === null}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition"
          >
            Siguiente
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed transition"
          >
            Finalizar
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
