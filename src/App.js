import React, { useState, useEffect } from "react";
import "./App.css";

const FallingHearts = () => {
  const numberOfHearts = 17; // Adjust the number of hearts as needed
  const [heartDelays, setHeartDelays] = useState([]);

  const getRandomPosition = () => {
    const randomX = Math.random() * window.innerWidth; // Subtracting 20 to keep the heart fully visible
    const randomY = Math.random();
    return { x: randomX, y: randomY };
  };

  useEffect(() => {
    const delays = Array.from(
      { length: numberOfHearts },
      () => Math.random() * 2000 // Random delay between 0 and 2000 milliseconds (2 seconds)
    );
    setHeartDelays(delays);
  }, [numberOfHearts]);

  return (
    <div className='heart-container'>
      {Array.from({ length: numberOfHearts }).map((_, index) => (
        <div
          key={index}
          className='heart'
          style={{
            left: `${getRandomPosition().x}px`,
            top: `${getRandomPosition().y}px`,
            animationDelay: `${heartDelays[index]}ms`,
          }}
        ></div>
      ))}
    </div>
  );
};

function App() {
  const [displayText, setDisplayText] = useState("Click Me!");
  const texts = [
    "Hi Manasi!",
    "I made this website...",
    "for the times that you miss me...",
    "Be prepared for lots of cheesy stuff",
    "hehe",
    "I love youuuu!",
    "You can say it back you know...",
    "Just kidding hehe",
    "I miss you",
    "Soooooooooooooooooo much",
    "Wouldn't it be nice if we were together",
    "then we wouldnt have to wait so long",
    "Youre my favorite coffee addict",
    "Is coffee your addiction anymore?",
    "Fine, favorite Coco Ichibanya addict",
    "Now I want Somi Somi",
    "You pavloved me...",
    "God, I love you",
    "I know I'm very annoying",
    "But you love me",
    "Right?",
    "Right????",
    "Rhetorical question, you have no choice.",
    "MUHAHAHAHAHAHA",
    "Yuge hug",
    "I have a secret to tell you",
    "Come closer",
    "Closerrr",
    "Even closer",
    "i like your butt",
    "Please dont kill me",
    "I have another secret",
    "Ready?",
    "Actually nevermind",
    "Hmmmmm okay I'll tell you",
    "Ok here goes nothing!!",
    "You are my sunshine",
    "My only sunshine",
    "Kidding! Kidding! I'll tell you!",
    "You are my sunshine though",
    "My secret is....",
    "Youre the one for me. I'm never ever letting you go.",
    "Now you know.",
    "Yip Yip Manasi!",
    "I cant believe I never watched avatar before you",
    "You know I'm still going to make you watch LoTR right?",
    "I wanna get with you",
    "But I can't right now and thats the issue",
    "My adorable blanket monster!",
    "Sexy blanket monster?",
    "Both? Both.",
    "Wow, you're still clicking",
    "*Blows Kiss*",
    "Did you catch it?",
    "XOXOXOXO",
    "She'll be coming back around the messages when she comes",
    "No really, end of the line",
    "Byeeeee!",
    "Call me?",
    "Ok back to the start now...",
  ];
  const [index, setIndex] = useState(0);

  const cycleText = () => {
    setIndex((index + 1) % texts.length);
    setDisplayText(texts[index]);
  };

  return (
    <>
      <FallingHearts />
      <div
        className='container'
        style={{ backgroundColor: "#f0f0f0", userSelect: "none" }}
      >
        <p onClick={cycleText} className='clickable-text'>
          {displayText}
        </p>
      </div>
    </>
  );
}

export default App;
