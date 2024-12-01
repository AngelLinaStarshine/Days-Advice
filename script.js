document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#btn");
    const par = document.querySelector("#par");

    button.addEventListener("click", getAdvice);

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const resReceived = await res.json();
        console.log(resReceived.slip.advice);

        showAdvice(resReceived.slip.advice);
        
        pronounceAdvice(resReceived.slip.advice);
    }

    function showAdvice(advice) {
        par.textContent = advice;
    }

    function pronounceAdvice(advice) {
        window.speechSynthesis.cancel();
        
        const speech = new SpeechSynthesisUtterance(advice);
        speech.lang = "en-GB";
        speech.rate = 1;  
        speech.pitch = 1; 
        window.speechSynthesis.speak(speech); 
    }
});
