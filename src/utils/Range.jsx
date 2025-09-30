export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

// If only one argument is given (range(5)), it assumes you want [0, 1, 2, 3, 4].

// If two arguments (range(3, 7)), it gives [3, 4, 5, 6].

// With a step (range(0, 10, 2)), it gives [0, 2, 4, 6, 8].
