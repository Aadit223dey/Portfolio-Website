import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Custom hook to track real-time mouse position.
 * Debounced using requestAnimationFrame for optimal performance.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      // Use requestAnimationFrame to optimize coordinate updates
      animationFrameId = requestAnimationFrame(() => {
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return position;
}
