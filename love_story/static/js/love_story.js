
const loveQuotes = [
    "In your eyes, I found my home, where every beat of my heart echoes your name.",
    "With you, every sunset feels like a promise of a new dawn, painting our love in shades of gold.",
    "Your touch is the melody that plays softly in the symphony of my soul.",
    "In the garden of our love, every bloom tells a story of our journey together.",
    "Like a fairytale written in the stars, our love story unfolds in whispers and wishes.",
    "Wrapped in your arms, I find solace in the warmth of your embrace, where every fear fades away.",
    "In the dance of our hearts, every step brings us closer, weaving our dreams into reality.",
    "With you, I've found my forever in the fleeting moments of eternity.",
    "In the silence of the night, I hear the echo of your love, a lullaby that soothes my restless soul.",
    "With every heartbeat, I surrender to the rhythm of our love, where time stands still in the melody of us."
];



window.onload = function() {
    var qutoe = document.createElement('div');

    function animateQuote() {
        const loveQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
        qutoe.innerText = loveQuote;
        qutoe.className = 'love_story_quote';

        for (let i = 0; i < loveQuote.length; i++) {
            setTimeout(function() {
                qutoe.innerText = loveQuote.substring(0, i + 1);
            }, 100 * i);
            document.body.appendChild(qutoe);
        }

        setTimeout(function() {
            for (let i = loveQuote.length; i >= 0; i--) {
                setTimeout(function() {
                    qutoe.innerText = loveQuote.substring(0, i);
                }, 100 * (loveQuote.length - i));
                document.body.appendChild(qutoe);
            }
        }, 100 * loveQuote.length);

        setTimeout(animateQuote, 100 * loveQuote.length * 2);
    }

    animateQuote();
}

// Path: genrate the qutoes a letter a time then suffle the letters