"use client"

import type React from "react"

import { useCallback, useEffect, useRef, useState, useMemo } from "react"

// Move this outside the component

const FLICKER_COLORS = [
  "rgba(201, 168, 96,", // Warm Amber
  "rgba(212, 168, 75,", // Gold
  "rgba(200, 121, 65,", // Warm Orange
  "rgba(180, 150, 90,", // Muted Gold
  "rgba(139, 154, 107,", // Olive Green
  "rgba(160, 140, 100,", // Tan
  "rgba(185, 165, 120,", // Light Bronze
  "rgba(150, 130, 90,", // Dark Gold
  "rgba(170, 145, 100,", // Caramel
  "rgba(145, 160, 110,", // Sage
  "rgba(190, 155, 95,", // Honey
  "rgba(175, 140, 85,", // Copper
]

interface FlickeringGridProps {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  width?: number
  height?: number
  className?: string
  maxOpacity?: number
}

const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  width,
  height,
  className,
  maxOpacity = 0.3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  const canvasParams = useMemo(
    () => ({
      squareSize,
      gridGap,
      maxOpacity,
    }),
    [squareSize, gridGap, maxOpacity]
  )

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      const cols = Math.floor(width / (canvasParams.squareSize + canvasParams.gridGap))
      const rows = Math.floor(height / (canvasParams.squareSize + canvasParams.gridGap))
      const squares = new Float32Array(cols * rows)
      const squareColors = new Array(cols * rows)
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * canvasParams.maxOpacity
        squareColors[i] = FLICKER_COLORS[Math.floor(Math.random() * FLICKER_COLORS.length)]
      }
      return { cols, rows, squares, squareColors, dpr }
    },
    [canvasParams]
  )

  const updateSquares = useCallback(
    (squares: Float32Array, squareColors: string[], deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity
          squareColors[i] = FLICKER_COLORS[Math.floor(Math.random() * FLICKER_COLORS.length)]
        }
      }
    },
    [flickerChance, maxOpacity]
  )

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      squareColors: string[],
      dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "transparent"
      ctx.fillRect(0, 0, width, height)
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const index = i * rows + j
          const opacity = squares[index]
          if (opacity > 0.05) {
            // Only draw visible squares
            ctx.fillStyle = `${squareColors[index]}${opacity})`
            ctx.fillRect(
              i * (squareSize + gridGap) * dpr,
              j * (squareSize + gridGap) * dpr,
              squareSize * dpr,
              squareSize * dpr
            )
          }
        }
      }
    },
    [squareSize, gridGap]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let gridParams: ReturnType<typeof setupCanvas>

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth
      const newHeight = height || container.clientHeight
      setCanvasSize({ width: newWidth, height: newHeight })
      gridParams = setupCanvas(canvas, newWidth, newHeight)
    }

    updateCanvasSize()

    let lastTime = 0

    const animate = (time: number) => {
      if (!isInView) return

      const deltaTime = (time - lastTime) / 1000
      lastTime = time

      updateSquares(gridParams.squares, gridParams.squareColors, deltaTime)

      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.squareColors,
        gridParams.dpr
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
    })

    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0 }
    )

    intersectionObserver.observe(canvas)

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView])

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  )
}

export { FlickeringGrid }
