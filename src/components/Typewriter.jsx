import { useState, useEffect, useRef } from "react";

const Typewriter = ({ text, speed = 80 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log("Typing started with text:", text);
    
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Reset state completely
    setDisplayedText("");
    index.current = 0;

    // Small delay to ensure state has been reset
    const timeoutId = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (index.current < text.length) {
          setDisplayedText((prev) => {
            const newText = text.substring(0, index.current + 1);
            return newText;
          });
          index.current += 1;
        } else {
          clearInterval(intervalRef.current);
        }
      }, speed);
    }, 10);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, speed]);

  return (
    <p className="text-xl md:text-2xl text-gray-400 mb-6">
      {displayedText}
    </p>
  );
};

export default Typewriter;