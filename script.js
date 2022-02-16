let warmHugs = "Hi I'm Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());

console.log(warmHugs.replace("like", "love"));

let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled.slice(18, 36));

let dotDotDot = "...";
let skullBones = `I don't have a skull${dotDotDot} or bones.`
console.log(skullBones);
console.log(Math.PI);

let randomNumber = Math.random();
randomNumber *= 3;
randomNumber += 1;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

console.log("let It Go! ".toUpperCase().repeat(2).trim());

let reindeers = "Reindeers are better than people."

console.log(reindeers.replace(/ /g, "_"));

console.log(Math.sqrt(2));
// console.log(Math.SQRT2);

let newRandomNumber = Math.random();
newRandomNumber *= 17;
newRandomNumber += 7;
newRandomNumber = Math.floor(newRandomNumber);
console.log(newRandomNumber);

let secondRandomNumber = Math.floor(Math.random() * 17 + 7)
console.log(secondRandomNumber);
