import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollHighlightTextProps {
  text: string;
  className?: string;
}

export const ScrollHighlightText = ({ text, className }: ScrollHighlightTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [highlightedWords, setHighlightedWords] = useState(0);
  
  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when element is in view
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start highlighting when element enters viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        // Calculate progress from 0 to 1 based on scroll position
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight * 0.6 + elementHeight)));
        
        // Determine how many words should be highlighted
        const wordsToHighlight = Math.floor(progress * words.length);
        setHighlightedWords(wordsToHighlight);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <div ref={containerRef} className={cn("leading-relaxed", className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            "transition-colors duration-300 ease-out",
            index < highlightedWords
              ? "text-foreground"
              : "text-muted-foreground/40"
          )}
        >
          {word}
          {index < words.length - 1 && " "}
        </span>
      ))}
    </div>
  );
};