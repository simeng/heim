"use client"
import { useRef, useEffect } from "react"

function effect1(ref) {
  const e = ref.current
  const w = parseInt(e.getAttribute("width"), 10)
  const h = parseInt(e.getAttribute("height"), 10)
  const c = e.getContext("2d")
  const px = c.getImageData(0, 0, w, h)
  const pal = []
  const cl = [
    [64, 244, 78, 133],
    [128, 252, 252, 192],
    [64, 60, 22, 84],
    [0, 244, 78, 133],
  ]

  for (let i = 0; i < cl.length; i++) {
    for (let j = 0; j < cl[i][0]; j++) {
      const r = cl[i][1] + (j / cl[i][0]) * (cl[i + 1][1] - cl[i][1])
      const g = cl[i][2] + (j / cl[i][0]) * (cl[i + 1][2] - cl[i][2])
      const b = cl[i][3] + (j / cl[i][0]) * (cl[i + 1][3] - cl[i][3])

      pal.push([r, g, b])
    }
  }
  function d(a, b, c, d) {
    return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d))
  }
  let t = 0
  function tick() {
    t += 1
    const tx = Math.cos(t / 80) * w
    const ty = Math.sin(t / 50) * h
    for (let x = 0; x < w; x++) {
      let f1 = (1 + Math.sin(x / 40)) * 128
      for (let y = 0; y < h; y++) {
        const f2 = (1 + Math.sin(d(x, y, tx, ty) / 50)) * 128
        let avg = Math.floor(((f1 + f2) / 2) % 256)
        px.data[(y * w + x) * 4] = pal[avg]?.[0] || 0
        px.data[(y * w + x) * 4 + 1] = pal[avg]?.[1] || 0
        px.data[(y * w + x) * 4 + 2] = pal[avg]?.[2] || 0
        px.data[(y * w + x) * 4 + 3] = 255
      }
    }
    c.putImageData(px, 0, 0)
  }
  setInterval(() => tick(), 100)
}

export default function PlasmaEffect({ width, height }) {
  const ref = useRef()
  useEffect(() => {
    effect1(ref)
  }, [width, height])

  return (
    <canvas
      style={{
        borderRadius: "5px",
        float: "left",
        margin: "0 10px 10px 0",
      }}
      ref={ref}
      width={width}
      height={height}
    ></canvas>
  )
}
