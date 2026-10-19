import { useEffect, useRef } from 'react';

export const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-highlight';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.background = 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)';
    cursor.style.border = '2px solid rgba(59, 130, 246, 0.5)';
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.pageX}px`;
        cursorRef.current.style.top = `${e.pageY}px`;
      }
    };

    const showCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('cursor-highlight-active');
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-highlight-active');
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', showCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
      if (cursorRef.current) {
        document.body.removeChild(cursorRef.current);
      }
    };
  }, []);

  return null;
};