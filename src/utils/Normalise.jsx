export const normalize = (
  number,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);

  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin;
};
// This function takes a number within a current scale and maps it to a new scale.
// For example, normalizing 5 from a scale of 0-10 to a scale of 0-100 would yield 50.
// If the number is outside the current scale, the result will be outside the new scale proportionally.
// The new scale defaults to 0-1 if not provided.
// Example usages:
// normalize(5, 0, 10) returns 0.5
// normalize(5, 0, 10, 0, 100) returns 50
// normalize(15, 0, 10, 0, 100) returns 150
// normalize(-5, 0, 10, 0, 100) returns -50
// normalize(5, 0, 10, -1, 1) returns 0

export const convertPolarToCartesian = ([angle, radius]) => {
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return [x, y];
};

// This function converts polar coordinates (angle in radians, radius) to Cartesian coordinates (x, y).
// Example: convertPolarToCartesian([Math.PI / 4, Math.sqrt(2)]) returns approximately [1, 1]
