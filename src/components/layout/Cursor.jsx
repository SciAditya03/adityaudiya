import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

/**
 * Custom cursor with glowing light effect and particle trail.
 * Features a bright center with radial gradient, multiple glow layers,
 * and sparkling particles that follow the cursor.
 */
function Cursor() {
  const cursorRef = useRef(null);
  const trailContainerRef = useRef(null);
  
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationId;
    let lastSparkleTime = 0;
    const sparkleInterval = 50; // Create sparkle every 50ms

    const cursor = cursorRef.current;
    
    // Track mouse position
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Create sparkles at intervals
      const currentTime = Date.now();
      if (currentTime - lastSparkleTime > sparkleInterval) {
        createSparkle(mouseX, mouseY);
        lastSparkleTime = currentTime;
      }
    };

    // Smooth cursor following with lerp
    const animateCursor = () => {
      // Smooth easing (lerp function)
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }
      
      animationId = requestAnimationFrame(animateCursor);
    };

    // Create glowing sparkles
    const createSparkle = (x, y) => {
      if (!trailContainerRef.current) return;
      
      const sparkle = document.createElement('div');
      sparkle.classList.add(styles.sparkle);
      
      // Random properties for variety
      const size = Math.random() * 16 + 8; // 8-24px
      const colors = [
        'rgba(255, 237, 215, 0.6)',  // Warm cream
        'rgba(245, 220, 180, 0.5)',  // Light cream
        'rgba(255, 200, 150, 0.4)',  // Peachy glow
        'rgba(255, 240, 220, 0.5)',  // Soft white
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
      sparkle.style.boxShadow = `0 0 ${size/2}px ${color}`;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      
      trailContainerRef.current.appendChild(sparkle);
      
      // Animate and remove
      sparkle.animate([
        { 
          opacity: 0.8, 
          transform: 'translate(-50%, -50%) scale(1)',
        },
        { 
          opacity: 0, 
          transform: 'translate(-50%, -50%) scale(0.3)',
        }
      ], {
        duration: 800 + Math.random() * 400, // 800-1200ms
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }).onfinish = () => sparkle.remove();
    };

    // Handle hover states
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('[data-cursor]')) {
        cursor?.classList.add(styles.hover);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.closest('[data-cursor]')) {
        cursor?.classList.remove(styles.hover);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={trailContainerRef} className={styles.trailContainer} />
      <div ref={cursorRef} className={styles.cursor} />
    </>
  );
}

export default Cursor;