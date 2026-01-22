"use client";

import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";

/* NOTE: Installe @react-spring/web si ce n'est pas fait :
   npm install @react-spring/web
*/

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
}

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing,
  onAnimationComplete,
}: BlurTextProps) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  // Default animations based on direction
  const defaultFrom =
    direction === "top"
      ? {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,-50px,0)",
        }
      : {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,50px,0)",
        };

  const defaultTo = [
    {
      filter: "blur(5px)",
      opacity: 0.5,
      transform:
        direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
    },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next: (arg0: Record<string, any>) => any) => {
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            if (
              animatedCount.current === elements.length &&
              onAnimationComplete
            ) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing: easing as any },
    })),
  );

  return (
    <p ref={ref} className={`inline-block ${className}`}>
      {springs.map((props, i) => (
        <animated.span
          key={i}
          style={{
            ...props,
            display: "inline-block",
            willChange: "transform, filter, opacity",
          }}
        >
          {elements[i] === " " ? "\u00A0" : elements[i]}
          {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
        </animated.span>
      ))}
    </p>
  );
};

export default BlurText;
