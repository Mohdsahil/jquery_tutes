const playButton = document.getElementById('play-button')
const pausButton = document.getElementById('paus-button')
const stopButton = document.getElementById('stop-button')
const textInput = document.getElementById('stop')
const speedInput = document.getElementById('speed')


playButton.addEventListener('click', () => {
    playText(textInput.value)
})

function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speedInput.value || 1
    speechSynthesis.speak(utterance)
}