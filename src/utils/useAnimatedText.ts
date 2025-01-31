import { useState, useEffect } from "react";

interface UseAnimatedTextProps {
  texts: string[];
  msPerCharAdd?: number;
  msPerCharDelete?: number;
  startingPauseMs?: number;
  endingPauseMs?: number;
  loopAnimation?: boolean;
  variationFactor?: number; // Random variation in speed
  triggerRestart?: boolean;
}

export const useAnimatedText = ({
  texts,
  msPerCharAdd = 50,
  msPerCharDelete = 30,
  startingPauseMs = 0,
  endingPauseMs = 1000,
  loopAnimation = true,
  variationFactor = 0.3,
  triggerRestart = false,
}: UseAnimatedTextProps) => {
  const [animatedText, setAnimatedText] = useState("");
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (triggerRestart) {
      setHasStarted(false);
      setSelectedTextIndex(0);
      setIsDeleting(false);
      setAnimationComplete(false);
    } else {
      setAnimatedText("");
    }
  }, [triggerRestart]);

  const getRandomizedSpeed = (baseSpeed: number, char: string) => {
    let variation = Math.random() * variationFactor;
    let speed =
      baseSpeed * (1 + (Math.random() > 0.5 ? variation : -variation));

    // Slow down spaces slightly, speed up punctuation
    if (char === " ") speed *= 1.2;
    if (/[.,!?]/.test(char)) speed *= 0.8;

    return Math.max(10, speed);
  };

  useEffect(() => {
    if (texts.length === 0 || animationComplete) return;

    if (!hasStarted) {
      if (startingPauseMs <= 0) {
        setHasStarted(true);
        return;
      }
      const timeout = setTimeout(() => setHasStarted(true), startingPauseMs);
      return () => clearTimeout(timeout);
    }

    let timeout: NodeJS.Timeout;
    const fullText = texts[selectedTextIndex];

    if (!isDeleting) {
      if (animatedText.length < fullText.length) {
        const nextChar = fullText[animatedText.length];
        timeout = setTimeout(
          () => {
            setAnimatedText(fullText.slice(0, animatedText.length + 1));
          },
          getRandomizedSpeed(msPerCharAdd, nextChar),
        );
      } else {
        timeout = setTimeout(() => {
          if (loopAnimation || selectedTextIndex < texts.length - 1) {
            setIsDeleting(true);
          } else {
            setAnimationComplete(true);
          }
        }, endingPauseMs);
      }
    } else {
      if (animatedText.length > 0) {
        const lastChar = animatedText[animatedText.length - 1];
        timeout = setTimeout(
          () => {
            setAnimatedText(fullText.slice(0, animatedText.length - 1));
          },
          getRandomizedSpeed(msPerCharDelete, lastChar),
        );
      } else {
        setIsDeleting(false);
        if (loopAnimation) {
          setSelectedTextIndex((prev) => (prev + 1) % texts.length);
        } else if (selectedTextIndex < texts.length - 1) {
          setSelectedTextIndex((prev) => prev + 1);
        } else {
          setAnimationComplete(true);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [
    animatedText,
    isDeleting,
    texts,
    selectedTextIndex,
    loopAnimation,
    msPerCharAdd,
    msPerCharDelete,
    endingPauseMs,
    variationFactor,
    animationComplete,
  ]);

  return animatedText;
};
