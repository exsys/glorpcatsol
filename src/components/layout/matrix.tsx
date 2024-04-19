"use client";
import { MATRIX_LETTERS } from "@/config/constants";
import { useRef, useEffect } from "react";

export default function Matrix(props: any) {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas: any = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let letters: string[] = [];
        letters = MATRIX_LETTERS.split('');
        const fontSize = 30;
        const columns = canvas.width / fontSize;

        let drops: number[] = [];
        for (var i = 0; i < columns; i++) {
            if (Math.random() > 0.5) {
                drops[i] = Math.random() * -25;
            }
        }

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, .2)';
            ctx.font = "18px Arial";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < drops.length; i++) {
                var text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#0f0';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;
                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        }

        setInterval(draw, 110);
    }, []);

    return (
        <canvas ref={canvasRef} {...props} />
    )
}