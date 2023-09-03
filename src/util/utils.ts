// function to randomly generate number between two integers
export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function to async wait for ms milliseconds
export const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const deepCopy = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
}