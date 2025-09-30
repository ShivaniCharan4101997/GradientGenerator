import React from "react";
import "./styles.css";

const colorModes = ["RGB", "HSL", "HEX", "CMYK", "LAB"];

const GradientGenerator = () => {
  const [precision, setPrecision] = React.useState(50);
  const [colorMode, setColorMode] = React.useState("RGB");
  const [colors, setColors] = React.useState(["#ff0000", "#00ff00"]);

  const colorStops = colors.join(", ");
  const backgroundImage = `linear-gradient(to right, ${colorStops})`;

  function handleRemoveColor(index) {
    const newColors = colors.filter((_, i) => i !== index);
    setColors(newColors);
  }

  return (
    <div className="wrapper">
      {/* Gradient Preview */}
      <div className="gradient__preview" style={{ backgroundImage }}></div>

      {/* Tool Section */}
      <div className="gradient__tool">
        <h1>Gradient Generator</h1>
        <p>Beautiful, lush gradients</p>

        <form className="gradient__form">
          {/* Colors */}
          <label htmlFor="colors">Colors</label>
          <div className="color__row">
            {colors.map((color, index) => (
              <div key={index} className="color__item">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => {
                    const newColors = [...colors];
                    newColors[index] = e.target.value;
                    setColors(newColors);
                  }}
                />
                {colors.length > 2 && (
                  <button
                    type="button"
                    className="remove__color"
                    onClick={() => handleRemoveColor(index)}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="add__color"
              onClick={() => setColors([...colors, "#000000"])}
            >
              +
            </button>
          </div>

          {/* Color Mode */}
          <label htmlFor="color-mode">Color Mode</label>
          <select
            id="color-mode"
            value={colorMode}
            onChange={(e) => setColorMode(e.target.value)}
          >
            {colorModes.map((mode) => (
              <option key={mode} value={mode.toLowerCase()}>
                {mode}
              </option>
            ))}
          </select>

          {/* Precision */}
          <label htmlFor="precision">Precision</label>
          <input
            type="range"
            id="precision"
            min="0"
            max="100"
            value={precision}
            onChange={(e) => setPrecision(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default GradientGenerator;
