import React, { useState, useEffect } from "react";
import "./Typewriter.css"; // Import the CSS file

const texts = {
  english: "Hello",
  french: "Bonjour",
  spanish: "Hola",
  punjabi: "ਹੈਲੋ" // Punjabi "Hello" in Gurmukhi script
};

export default function Typewriter() {
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguage((prevLang) => {
        const languages = Object.keys(texts);
        const currentIndex = languages.indexOf(prevLang);
        const nextIndex = (currentIndex + 1) % languages.length;
        return languages[nextIndex];
      });
    }, 3000); // Change language every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="typewriter italic">
      {texts[language]}
    </div>
  );
}
