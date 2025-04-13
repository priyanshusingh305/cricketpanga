"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, RefreshCw } from "lucide-react"

export function MiniGame() {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [gameActive, setGameActive] = useState(false)
  const [highScore, setHighScore] = useState(0)
  const [batPosition, setBatPosition] = useState({ x: 50, y: 50 })
  const [ballPosition, setBallPosition] = useState({ x: 30, y: 30 })
  const [ballDirection, setBallDirection] = useState({ x: 2, y: 2 })

  useEffect(() => {
    if (gameActive) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            setGameActive(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [gameActive])

  useEffect(() => {
    if (gameActive) {
      const gameLoop = setInterval(() => {
        setBallPosition((prev) => {
          const newX = prev.x + ballDirection.x
          const newY = prev.y + ballDirection.y

          // Check boundaries
          let newDirX = ballDirection.x
          let newDirY = ballDirection.y

          if (newX <= 0 || newX >= 100) {
            newDirX = -ballDirection.x
          }

          if (newY <= 0 || newY >= 100) {
            newDirY = -ballDirection.y
          }

          // Check collision with bat
          const batSize = 15
          if (
            newX >= batPosition.x - batSize / 2 &&
            newX <= batPosition.x + batSize / 2 &&
            newY >= batPosition.y - batSize / 2 &&
            newY <= batPosition.y + batSize / 2
          ) {
            setScore((prev) => prev + 1)
            newDirX = -ballDirection.x
            newDirY = -ballDirection.y
          }

          setBallDirection({ x: newDirX, y: newDirY })

          return { x: newX, y: newY }
        })
      }, 50)

      return () => clearInterval(gameLoop)
    }
  }, [gameActive, batPosition, ballDirection])

  const startGame = () => {
    setScore(0)
    setTimeLeft(15)
    setGameActive(true)
    setBallPosition({ x: 30, y: 30 })
    setBallDirection({ x: 2, y: 2 })
  }



  interface MouseEventWithTarget extends React.MouseEvent<HTMLDivElement> {
    currentTarget: EventTarget & HTMLDivElement
  }

  const handleMouseMove = (e: MouseEventWithTarget): void => {
    if (!gameActive) return

    const gameArea = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - gameArea.left) / gameArea.width) * 100
    const y = ((e.clientY - gameArea.top) / gameArea.height) * 100

    setBatPosition({ x, y })
  }

  interface TouchEventWithTarget extends React.TouchEvent<HTMLDivElement> {
    currentTarget: EventTarget & HTMLDivElement
  }

  const handleTouchMove = (e: TouchEventWithTarget): void => {
    if (!gameActive) return

    e.preventDefault()

    const touch = e.touches[0]
    const gameArea = e.currentTarget.getBoundingClientRect()
    const x = ((touch.clientX - gameArea.left) / gameArea.width) * 100
    const y = ((touch.clientY - gameArea.top) / gameArea.height) * 100

    setBatPosition({ x, y })
  }

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  }, [score, highScore])

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6 md:mb-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl">Test Your Cricket Skills</h2>
            <p className="max-w-[600px] text-sm sm:text-base text-gray-500">
              Play this mini-game to see if you have what it takes to be a cricket champion
            </p>
          </div>
        </div>

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex justify-between items-center text-lg md:text-xl">
              <span>Cricket Mini-Game</span>
              <div className="flex items-center gap-1 md:gap-2">
                <Trophy className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                <span className="text-sm md:text-base">High Score: {highScore}</span>
              </div>
            </CardTitle>
            <CardDescription className="text-xs md:text-sm">
              Move your finger or mouse to hit the ball with the bat. Score as many runs as possible in 15 seconds!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="relative w-full h-48 md:h-64 bg-gradient-to-b from-green-100 to-green-200 rounded-lg border overflow-hidden cursor-none touch-none"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchMove}
            >
              {/* Game area */}
              <div
                className="absolute bg-blue-600 rounded-full w-3 h-3 md:w-4 md:h-4 transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${ballPosition.x}%`, top: `${ballPosition.y}%` }}
              ></div>

              <div
                className="absolute bg-gradient-to-r from-blue-700 to-blue-900 rounded-md w-10 h-3 md:w-12 md:h-4 transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${batPosition.x}%`, top: `${batPosition.y}%` }}
              ></div>

              {!gameActive && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button onClick={startGame} className="bg-blue-700 hover:bg-blue-800 text-sm md:text-base">
                    {timeLeft === 0 ? "Play Again" : "Start Game"}
                  </Button>
                </div>
              )}

              <div className="absolute top-2 left-2 bg-white/80 rounded px-2 py-1 text-xs md:text-sm font-medium">
                Time: {timeLeft}s
              </div>

              <div className="absolute top-2 right-2 bg-white/80 rounded px-2 py-1 text-xs md:text-sm font-medium">
                Score: {score}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-xs md:text-sm text-gray-500">Win real prizes in our fantasy cricket games!</p>
            <Button
              variant="outline"
              size="sm"
              onClick={startGame}
              disabled={gameActive}
              className="gap-1 text-xs md:text-sm"
            >
              <RefreshCw className="h-3 w-3 md:h-4 md:w-4" /> Reset
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
