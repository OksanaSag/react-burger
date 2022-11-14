export default function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }