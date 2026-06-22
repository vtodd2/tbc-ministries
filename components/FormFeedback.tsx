'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function useFormFeedback() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  return { status, message, setStatus, setMessage };
}

export function FormFeedback({
  status,
  message,
}: {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}) {
  return (
    <AnimatePresence>
      {status !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`rounded-3xl border px-6 py-4 text-sm font-medium ${
            status === 'success'
              ? 'border-green-500/30 bg-green-500/10 text-green-300'
              : status === 'error'
                ? 'border-red-500/30 bg-red-500/10 text-red-300'
                : 'border-blue-500/30 bg-blue-500/10 text-blue-300'
          }`}
        >
          {status === 'loading' && <span className="inline-block mr-2 animate-spin">⏳</span>}
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
