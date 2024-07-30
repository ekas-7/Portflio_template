import React, { useState, useEffect } from "react";
import "./Typewriter.css"; // Ensure this path is correct

const Typewriter = ({ texts = [], delay = 5000, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    let text = texts[currentIndex] || "";
    let isDeleting = false;
    let timeoutId;

    const typeWriter = () => {
      if (isDeleting) {
        setDisplayedText(text.slice(0, index - 1));
        index--;
        if (index === 0) {
          isDeleting = false;
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          text = texts[(currentIndex + 1) % texts.length];
        }
      } else {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        if (index > text.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeWriter, delay);
          return;
        }
      }
      timeoutId = setTimeout(typeWriter, 100); // Adjust typing speed here
    };

    typeWriter();

    return () => {
      clearTimeout(timeoutId);
      setDisplayedText(""); // Clear the text when component unmounts
    };
  }, [texts, currentIndex, delay]);

  return <span className={`typewriter ${className}`}>{displayedText}</span>;
};

export default Typewriter;
