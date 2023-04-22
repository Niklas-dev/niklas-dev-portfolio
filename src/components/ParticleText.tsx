"use client";
import React from "react";

import "../styles/particles.css";

import { useEffect, useRef } from "react";

export default function ParticleText() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray: Particle[] = [];
    let adjustX = 200; // position of text
    let adjustY = 200;

    // handle mouse object to store mouse co ordinates
    const mouse = {
      x: 0,
      y: 0,
      radius: 20,
    };

    canvas.addEventListener("mousemove", function (event) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    ctx.fillStyle = "white";
    ctx.font = "10vmin sans-serif";
    ctx.fillText("Skills", 0, 100);
    const textCoordinates = ctx.getImageData(0, 0, canvas.height, canvas.width); //height and width of canvas

    // blueprint to create particles
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 15 + 10;
      }

      draw() {
        ctx.fillStyle = "coral";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 1);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // return speed adjustment
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 5;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 5;
          }
        }
      }
    }

    //function init to fill particle array
    function init() {
      particleArray = [];

      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (
            textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 4] >
            128
          ) {
            let positionX = x + adjustX;
            let positionY = y + adjustY;
            particleArray.push(new Particle(positionX * 2.2, positionY * 2.2));
          }
        }
      }
    }
    init();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
      requestAnimationFrame(animate);
    }
    animate();
  });

  return (
    <canvas className="bg-white w-full" ref={canvasRef} id="myCanvas">
      Your browser does not support the canvas element.
    </canvas>
  );
}
