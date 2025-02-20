import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;
    const textWithQuotes = `"${text}"`;

    if (isTyping) {
      if (displayText.length < textWithQuotes.length) {
        // Still typing
        timer = setTimeout(() => {
          setDisplayText(textWithQuotes.substring(0, displayText.length + 1));
        }, speed);
      } else {
        // Finished typing, wait before starting to delete
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length === 0) {
        // Finished deleting, start typing again
        timer = setTimeout(() => {
          setIsTyping(true);
        }, 1000);
      } else {
        // Still deleting
        timer = setTimeout(() => {
          setDisplayText(textWithQuotes.substring(0, displayText.length - 1));
        }, speed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isTyping, text, speed]);

  return (
    <span className="inline-block font-['Playfair_Display'] tracking-wide leading-relaxed">
      <span className="text-red-500">{displayText}</span>
      <span className="animate-pulse ml-1 text-gray-400">|</span>
    </span>
  );
};

export default TypeWriter; 