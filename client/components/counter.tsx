'use client';

import { animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface ICounter {
  from: number;
  to: number;
}

function Counter({ from, to }: ICounter) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          node.textContent = parseInt(value.toFixed(0)).toLocaleString();
        },
      });

      return () => controls.stop();
    }
  }, [from, to]);

  return (
    <section className="mt-6">
      <div ref={nodeRef} className="text-6xl font-bold" />
    </section>
  );
}

export default Counter;
