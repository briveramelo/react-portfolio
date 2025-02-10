import { useState, useEffect } from "react";

interface UseAnimatedTextProps {
  texts: (string | undefined)[];
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
      setSelectedTextIndex(0);
      setIsDeleting(false);
    }
    setHasStarted(!triggerRestart);
    setAnimationComplete(!triggerRestart);
    setAnimatedText("");
  }, [triggerRestart]);

  const getRandomizedDelayMs = (baseDelayMs: number, char: string) => {
    let variation = Math.random() * variationFactor;
    let delayMs =
      baseDelayMs * (1 + (Math.random() > 0.5 ? variation : -variation));

    // speed up spaces slightly, slow down punctuation
    if (char === " ") delayMs *= 0.9;
    if (/[.!?]/.test(char)) delayMs *= 1.2;

    return Math.max(1, delayMs);
  };

  useEffect(() => {
    if (texts.length === 0 || animationComplete) return;

    const fullText = texts[selectedTextIndex];
    if (!fullText) return;

    if (!hasStarted) {
      if (startingPauseMs <= 0) {
        setHasStarted(true);
        return;
      }
      const timeout = setTimeout(() => setHasStarted(true), startingPauseMs);
      return () => clearTimeout(timeout);
    }

    let timeout: any;

    if (!isDeleting) {
      if (animatedText.length < fullText.length) {
        const nextChar = fullText[animatedText.length];
        timeout = setTimeout(
          () => {
            setAnimatedText(fullText.slice(0, animatedText.length + 1));
          },
          getRandomizedDelayMs(msPerCharAdd, nextChar),
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
          getRandomizedDelayMs(msPerCharDelete, lastChar),
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
