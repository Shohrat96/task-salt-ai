import { useEffect, useState } from "react";

interface ParallaxOptions {
  speed?: number;
  fadeStart?: number;
  fadeEnd?: number;
}

// Make the hook generic
export function useParallax<T extends HTMLElement | null>(
  ref: React.RefObject<T>,
  options: ParallaxOptions = {}
) {
  const { speed = 0.5, fadeStart = 0, fadeEnd = 1000 } = options;
  const [style, setStyle] = useState({ transform: 'translateY(0px)', opacity: 1 });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollTop = window.scrollY;
      const translate = scrollTop * speed;
      let opacity = 1;

      if (scrollTop >= fadeStart) {
        opacity = Math.max(0, 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart));
      }

      setStyle({
        transform: `translateY(-${translate}px)`,
        opacity,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed, fadeStart, fadeEnd]);

  return style;
}
