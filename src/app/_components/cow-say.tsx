"use client";

import { useEffect } from "react";
import { say } from "cowsay-browser";

const phrases = [
  "Hello There!", 
  "You should hire this guy!", 
  "Looking good!",
  "Thanks for visiting my website! I hope you're having a good day.",
  "You're doing your best with what you've got!",
  "It's Over 9000!",
  // "“No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love.”—Sheeta, Castle In The Sky",
  // "“Kick logic to the curb and do the impossible!” — Kamina, Gurren lagann"
];
const emoji = [
  '🚀',
  '😉'
]
const creatures = [
  "dragon-and-cow", 
  "chicken-and-egg", 
  "default", 
  "dragon", 
  "small",
  "elephant", 
  "skeleton",
  "squirrel",
  "stegosaurus",
  "rooster",
  "turtle",
  "tux",
]

const random = (arr: string[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length); 
  return arr[randomIndex]
};

function CowSay() {
  useEffect(() => {
    console.info(
      say({
        text: random(phrases) + ' ' + random(emoji),
        f: random(creatures)
      })
    );
  }, []);

  return null;
}

export default CowSay