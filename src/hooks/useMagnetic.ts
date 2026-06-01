import { useEffect, useRef } from "react";

/**
 * Creates a magnetic attraction effect on hover.
 * The element follows the mouse slightly within a threshold, creating a rich physical micro-interaction.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = element.getBoundingClientRect();
      
      // Calculate distance between mouse and element center
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      // If hovered or extremely close, apply pull
      const isHovered = 
        clientX >= left - 20 && 
        clientX <= left + width + 20 && 
        clientY >= top - 20 && 
        clientY <= top + height + 20;

      if (isHovered) {
        element.style.transform = `translate(${distanceX * strength}px, ${distanceY * strength}px)`;
        element.style.transition = "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)";
      } else {
        // Return to origin smoothly
        element.style.transform = "";
        element.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = "";
      element.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
