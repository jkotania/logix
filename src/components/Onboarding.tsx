// src/components/Onboarding.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const steps = {
  type: {
    title: "Jak możemy Ci pomóc?",
    options: [
      { id: 'new-project', label: 'Nowy Projekt', icon: '🚀' },
      { id: 'consultation', label: 'Konsultacja', icon: '💡' }
    ]
  },
  project: {
    title: "Jaki projekt chcesz zrealizować?",
    options: [
      { id: 'website', label: 'Strona internetowa', icon: '🌐' },
      { id: 'app', label: 'Aplikacja', icon: '📱' },
      { id: 'ecommerce', label: 'Sklep internetowy', icon: '🛍️' },
      { id: 'other', label: 'Inny projekt', icon: '✨' }
    ]
  },
  availability: {
    title: "Kiedy jesteś dostępny?",
    options: [
      { id: 'asap', label: 'Jak najszybciej', icon: '⚡' },
      { id: 'month', label: 'W ciągu miesiąca', icon: '📅' },
      { id: 'quarter', label: 'W ciągu kwartału', icon: '🗓️' },
      { id: 'flexible', label: 'Jestem elastyczny', icon: '🎯' }
    ]
  },
  time: {
    title: "Wybierz preferowaną godzinę",
    options: [
      { id: 'morning', label: 'Rano (8:00 - 12:00)', icon: '🌅' },
      { id: 'afternoon', label: 'Po południu (12:00 - 16:00)', icon: '☀️' },
      { id: 'evening', label: 'Wieczorem (16:00 - 20:00)', icon: '🌆' },
      { id: 'flexible', label: 'Dowolna pora', icon: '🕐' }
    ]
  },
  summary: {
    title: "Dziękujemy za wybór!",
    options: []
  }
};

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState('type');
  const [selections, setSelections] = useState({});
  const [direction, setDirection] = useState(0);

  const handleSelect = (option) => {
    setDirection(1);
    setSelections(prev => ({ ...prev, [currentStep]: option }));
    
    if (currentStep === 'type') {
      setCurrentStep(option.id === 'new-project' ? 'project' : 'availability');
    } else if (currentStep === 'project') {
      setCurrentStep('availability');
    } else if (currentStep === 'availability') {
      setCurrentStep('time');
    } else if (currentStep === 'time') {
      setCurrentStep('summary');
    }
  };

  const handleBack = () => {
    setDirection(-1);
    if (currentStep === 'project') {
      setCurrentStep('type');
    } else if (currentStep === 'availability' && selections.type?.id === 'new-project') {
      setCurrentStep('project');
    } else if (currentStep === 'availability') {
      setCurrentStep('type');
    } else if (currentStep === 'time') {
      setCurrentStep('availability');
    } else if (currentStep === 'summary') {
      setCurrentStep('time');
    }
  };

  const renderContent = () => {
    if (currentStep === 'summary') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <motion.div 
            className="text-6xl mb-6"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          >
            👋
          </motion.div>
          <p className="text-gray-300 text-lg">
            Świetnie! Skontaktujemy się z Tobą w sprawie {selections.type?.id === 'new-project' ? 'projektu' : 'konsultacji'}.
          </p>
          <div className="text-gray-400 space-y-2">
            {selections.type?.id === 'new-project' && (
              <p>Typ projektu: {selections.project?.label}</p>
            )}
            <p>Dostępność: {selections.availability?.label}</p>
            <p>Preferowana pora: {selections.time?.label}</p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/"
              className="inline-block px-8 py-3 mt-8 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Wróć do strony głównej
            </Link>
          </motion.div>
        </motion.div>
      );
    }

    return (
      <>
        {steps[currentStep].options.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect(option)}
            className="group p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left"
          >
            <motion.div 
              className="text-3xl mb-3"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {option.icon}
            </motion.div>
            <h2 className="text-xl font-semibold text-white mb-2">
              {option.label}
            </h2>
            <motion.div 
              className="text-blue-500 group-hover:text-blue-400"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              Wybierz →
            </motion.div>
          </motion.button>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Usuwamy Link powrotu gdy jesteśmy na ostatnim kroku */}
      {currentStep !== 'summary' && (
        <Link 
          href="/" 
          className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <motion.div
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            <span>Powrót</span>
          </motion.div>
        </Link>
      )}

      <div className="max-w-2xl w-full mx-4">
        <div className="space-y-12">
          <motion.div 
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {steps[currentStep].title}
            </h1>
            <div className="flex justify-center gap-2 mb-8">
              {['type', 'project', 'availability', 'time', 'summary'].map((step, index) => (
                <motion.div 
                  key={step}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`h-2 w-2 rounded-full ${
                    currentStep === step ? 'bg-blue-500' : 
                    Object.keys(selections).includes(step) ? 'bg-green-500' : 
                    'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: direction * 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`${currentStep === 'summary' ? '' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}`}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

          {currentStep !== 'type' && currentStep !== 'summary' && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleBack}
              className="mt-8 text-gray-400 hover:text-white transition-colors flex items-center gap-2 mx-auto"
            >
              <span>← Wróć do poprzedniego kroku</span>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}