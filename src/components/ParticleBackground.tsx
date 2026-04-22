"use client";

import React, { useEffect, useRef } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Track mouse position smoothly
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const mouseRadius = 350;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse follow (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const numLines = Math.floor(canvas.height / 35); // Responsive line count
      const step = 30; // Distance between x points (lower = smoother)
      
      ctx.lineWidth = 1.2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      // Slate/Navy color with low opacity for alabaster background
      ctx.strokeStyle = "rgba(15, 23, 42, 0.12)"; 

      // Draw extra lines above and below to prevent clipping
      for (let i = -10; i < numLines + 10; i++) {
        ctx.beginPath();
        const baseY = (i / numLines) * canvas.height;

        for (let x = -50; x <= canvas.width + 50; x += step) {
          // Complex wave combination for pseudo-random organic feel
          const wave1 = Math.sin(x * 0.0015 + time * 0.0004) * 85;
          const wave2 = Math.sin(x * 0.003 - time * 0.0002 + baseY * 0.002) * 55;
          const wave3 = Math.sin(x * 0.0008 + time * 0.0006 - baseY * 0.004) * 35;
          
          const y = baseY + wave1 + wave2 + wave3;

          // Mouse repulsion logic
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let drawX = x;
          let drawY = y;

          if (dist < mouseRadius) {
            // Easing function for smooth distortion (Gaussian-like curve)
            const force = Math.pow(1 - dist / mouseRadius, 2.5); 
            const angle = Math.atan2(dy, dx);
            
            // Push points away radially from the cursor
            drawX += Math.cos(angle) * force * 70;
            drawY += Math.sin(angle) * force * 70;
          }

          if (x === -50) {
            ctx.moveTo(drawX, drawY);
          } else {
            ctx.lineTo(drawX, drawY);
          }
        }
        ctx.stroke();
      }

      time += 16; // Increment roughly 1 frame at 60fps
      animationFrameId = requestAnimationFrame(drawWaves);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    // Initialize
    resize();
    // initially place mouse far away
    mouse.x = -1000;
    mouse.y = -1000;
    drawWaves();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        background: "#F2F0E6", // Alabaster background
      }}
    />
  );
}
