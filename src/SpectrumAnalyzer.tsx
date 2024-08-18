import React, { useEffect, useRef, RefObject } from 'react'

function getAnalyser(audioRef: RefObject<HTMLAudioElement>) {
	if (!audioRef?.current) {
		return
	}
	let bufferLength = 0
	let dataArray = new Uint8Array(0)

	let audioContext = new AudioContext()
	let analyser = audioContext.createAnalyser()
	const track = audioContext.createMediaElementSource(audioRef.current)

	track.connect(analyser)
	analyser.connect(audioContext.destination)

	analyser.fftSize = 1024
	bufferLength = analyser.frequencyBinCount
	dataArray = new Uint8Array(bufferLength)

	return [analyser, dataArray]
}

function getVideo(videoRef: RefObject<HTMLCanvasElement>) {
	if (!videoRef?.current) {
		return
	}
	const width = parseInt(videoRef.current.getAttribute("width"), 10)
	const height = parseInt(videoRef.current.getAttribute("height"), 10)
	const ctx = videoRef.current.getContext("2d")

	return [ctx, width, height]
}

export default function SpectrumAnalyzer({ isPlaying }) {
	const audioRef = useRef<HTMLAudioElement>()
	const videoRef = useRef<HTMLCanvasElement>()

	useEffect(() => {
		const [analyser, dataArray] = getAnalyser(audioRef)
		const [ctx, width, height] = getVideo(videoRef)
	}, [audioRef.current, videoRef.current])

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.play()
			} else {
				audioRef.current.pause()
			}
		}
	}, [isPlaying])

	const draw = () => {
		if (analyser !== null) {
			analyser.getByteFrequencyData(dataArray)
		}
		ctx.fillStyle = "rgb(0, 0, 0)"
		ctx.fillRect(0, 0, width, height)

		for (let i = 0; i < analyser.frequencyBinCount; i++) {
			const h = dataArray[i]
			ctx.fillStyle =
				"rgb(" +
				Math.cos((h + i) / 40) * 255 +
				", 0, " +
				Math.sin((h + i) / 50) * 255 +
				")"
			ctx.fillRect(i, height - h / 2, 1, h)
		}
		requestAnimationFrame(draw)
	}

	return (
		<div style={{
			display: "flex",
			flexDirection: "column"
		}}>
			<canvas ref={videoRef} width="512" height="100"></canvas>
			<audio ref={audioRef} src="/dump/Warcraft.mp3"></audio>
		</div >
	)
}
