export default class Coins {
    coinSounds = []

    constructor() {
        const sounds = [
            "c1.mp3",
            "c2.mp3",
            "c3.mp3",
            "c4.mp3",
            "c5.mp3",
            "c6.mp3",
            "c7.mp3",
            "c8.mp3",
            "c8.mp3",
            "c9.mp3",
            "c10.mp3",
            "c11.mp3"
        ]
        for (const i in sounds) {
            this.coinSounds[i] = new Audio("coin_sounds/" + sounds[i])
        }
        console.log(this.coinSounds)
    }
    play() {
        this.coinSounds[Math.floor(Math.random() * this.coinSounds.length)].play()
    }
}
