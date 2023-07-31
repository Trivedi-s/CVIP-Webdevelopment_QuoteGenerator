quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");
const quotes = [
    {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
      },
      {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra"
      },
      {
        text: "A house divided against itself cannot stand.",
        author: "Abraham Lincoln"
      },
      {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe"
      },
      {
        text: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer"
      },
      {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu"
      },
      {
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg, type.fit"
      },
      {
        "text": "Well begun is half done.",
        "author": "Aristotle, type.fit"
      },
      {
        "text": "Life is a learning experience, only if you learn.",
        "author": "Yogi Berra"
      },
      {
        text: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster"
      },
      {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha"
      },
      {
        text: "What you give is what you get.",
        author: "Byron Pulsifer"
      },
      {
        text: "We can only learn to love by loving.",
        author: "Iris Murdoch"
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark"
      },
      {
        text: "You'll see it when you believe it.",
        author: "Wayne Dyert"
      },
      {
        text: "Today is the tomorrow we worried about yesterday.",
        author:  " "
      }
    // Add more quotes here
  ];
  
  soundBtn.addEventListener("click", ()=>{
    //SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}` );
    speechSynthesis.speak(utterance); //speaks the utterance
  });

  copyBtn.addEventListener("click", ()=>{
    //copy tha quote text
    //writeText()- writes specified text string to system clipboard
     navigator.clipboard.writeText(quoteText.innerText)
     .then(() => {
       // Success message (optional)
       console.log("Quote copied to clipboard!");
     })
     .catch((error) => {
       // Handle errors (optional)
       console.error("Failed to copy quote:", error);
     });
    });
    twitterBtn.addEventListener("click", ()=>{
      let tweetUrl= `https://twitter.com/intent/tweet?url=${quoteBtn.innerText}`
      window.open(tweetUrl, "_blank");
   });

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteText").textContent = `"${quote.text}"`;
    document.getElementById("quoteAuthor").textContent = `- ${quote.author}`;

    const quoteContainer = document.querySelector(".quote-container");
  quoteContainer.classList.add("animate_animated", "animate_fadeIn"); // Add the animation class
  }
  
  document.getElementById("generateButton").addEventListener("click", generateQuote);
  
  // Initial quote generation on page load
  generateQuote();