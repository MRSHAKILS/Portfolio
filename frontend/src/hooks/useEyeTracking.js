import { useState, useEffect, useRef } from 'react';
import { useMousePosition } from './useMousePosition';

export const useEyeTracking = () => {
  const mousePosition = useMousePosition();
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const avatarRef = useRef(null);

  useEffect(() => {
    if (avatarRef.current) {
      const avatarRect = avatarRef.current.getBoundingClientRect();
      const avatarCenterX = avatarRect.left + avatarRect.width / 2;
      const avatarCenterY = avatarRect.top + avatarRect.height / 2;

      // Calculate the angle between cursor and avatar center
      const deltaX = mousePosition.x - avatarCenterX;
      const deltaY = mousePosition.y - avatarCenterY;
      
      // Limit eye movement to a realistic range
      const maxMovement = 15;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const normalizedX = distance > 0 ? (deltaX / distance) * Math.min(maxMovement, distance / 20) : 0;
      const normalizedY = distance > 0 ? (deltaY / distance) * Math.min(maxMovement, distance / 20) : 0;

      setEyePosition({
        x: normalizedX,
        y: normalizedY
      });
    }
  }, [mousePosition]);

  return { eyePosition, avatarRef };
};