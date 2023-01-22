"use client"
import { useEffect, useRef } from "react"

function effect1(ref) {
  let p = ref.current.getContext("2d")
  let width = ref.current.getAttribute("width")
  let height = ref.current.getAttribute("height")

  p.fillStyle = "#000"
  p.fillRect(0, 0, width, height)

  let co = ["#ccc", "#888", "#444"]

  let ci = 0
  let d = 3413
  for (let i = 0; i < d; i++) {
    let j = Math.random() * d + i * d
    let x = j % width
    let y = j / width
    ci++
    p.fillStyle = co[ci % 3]
    p.fillRect(x, y, 2, 2)
  }
}

export default function StarsBackground({ width, height }) {
  const ref = useRef()
  useEffect(() => {
    effect1(ref)
  }, [width, height])
  return <canvas id="stars" width={width} height={height} ref={ref} />
}
