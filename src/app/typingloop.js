// components/TypingLoopText.jsx
'use client'
import { useState, useEffect } from "react";

const TypingLoopText = ({ texts, typingSpeed = 150, pause = 1000 }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        let timer;
        if (!isDeleting && displayedText.length < currentText.length) {
            // Yazılır
            timer = setTimeout(() => {
                setDisplayedText(currentText.slice(0, displayedText.length + 1));
            }, typingSpeed);
        } else if (isDeleting && displayedText.length > 0) {
            // Silinir
            timer = setTimeout(() => {
                setDisplayedText(currentText.slice(0, displayedText.length - 1));
            }, typingSpeed / 2);
        } else {
            // Növbəti yazıya keç
            timer = setTimeout(() => {
                setIsDeleting(!isDeleting);
                if (!isDeleting) {
                    // Yazdı, indi siləcək
                } else {
                    // Silindi, növbəti yazıya keç
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }, pause);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, textIndex, texts, typingSpeed, pause]);

    return (
        <div className="text-2xl md:text-5xl text-center md:text-start text-white font-semibold   ">
            {displayedText} <span className=" cursor font-bold">|</span>
        </div>
    );
};

export default TypingLoopText;
