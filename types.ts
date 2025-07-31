import type { SVGProps, ReactNode } from 'react';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Exercise {
  id: string;
  title: string;
  consigna: string; // The instruction/prompt for the user
}

export interface Lesson {
  id: string;
  title: string;
  content: string; // HTML content for the lesson
  quiz?: QuizQuestion[];
  exercise?: Exercise;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
  lessons: Lesson[];
}

export interface UserProgress {
  [moduleId: number]: {
    [lessonId: string]: {
      quizCompleted?: boolean;
      exerciseCompleted?: boolean;
      quizScore?: number;
    }
  }
}