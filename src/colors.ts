export const red = "red";
export const orange = "orange";
export const yellow = "yellow";
export const green = "green";
export const blue = "blue";
export const indigo = "indigo";
export const violet = "violet";

// Grouped into an object for compatibility with other use cases
export const colors = {
  red,
  orange,
  yellow,
  green,
  blue,
  indigo,
  violet,
} as const;

export type ColorKeys = keyof typeof colors;
