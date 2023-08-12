const by = (selector) => document.querySelector(selector);
const $typingtext = by(".typing-text");
const $cursor = by(".cursor");

const words = [" Kenneth Ian Clavel", " an aspiring Frontend Web Developer"];
const delay = {
  typing: 50,
  keeping: 10000,
  erasing: 50,
  word: 1500,
};
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

const type = async (word) => {
  $cursor.classList.add("typing");
  for (const char of word) {
    $typingtext.textContent += char;
    await sleep(delay.typing);
  }
  $cursor.classList.remove("typing");
  await sleep(delay.keeping);
  for (let i = 1; i <= word.length; i++) {
    $typingtext.textContent = word.substring(0, word.length - i);
    await sleep(delay.erasing);
  }

};

const loop = async (wordIndex = 0) => {
  await type(words[wordIndex % words.length]);
  setTimeout(async () => {
    await loop(wordIndex + 1);
  }, delay.word);
};

document.addEventListener("DOMContentLoaded", () => {
  loop();
});
