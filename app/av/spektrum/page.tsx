"use client"
import React, { useState } from "react"
import SpectrumAnalyzer from "@/components/SpectrumAnalyzer"
import "../../page.css"

export default function Page() {
	const [isPlaying, setIsPlaying] = useState(false)
	return (
		<>
			<SpectrumAnalyzer isPlaying={isPlaying} />
			<button onClick={() => setIsPlaying(!isPlaying)}>Play</button>
		</>
	)
}
