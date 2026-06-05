import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { DEVICE_PRESETS, DeviceFrame } from "../../src";
import "../../src/styles/device-frames.scss";
import "./styles.css";

const colorOptions = ["black", "silver", "natural", "gold", "blue", "pink", "green", "white"];

function DemoScreen({ device, orientation }) {
  const rows = useMemo(
    () => [
      ["Platform", device.platform],
      ["Device", device.label],
      ["Mode", orientation],
      ["Size", `${device.width} x ${device.height}`],
    ],
    [device, orientation],
  );

  return (
    <div className="demo-screen">
      <main>
        <div className="demo-badge">{device.platform}</div>
        <h1>{device.label}</h1>
        <div className="demo-grid">
          {rows.map(([label, value]) => (
            <div key={label} className="demo-row">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="demo-list">
          {Array.from({ length: 20 }, (_, index) => (
            <article key={index} className="demo-list-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>Scrollable JSX content stays inside the safe screen area.</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

function App() {
  const [deviceName, setDeviceName] = useState("iphone-16");
  const [orientation, setOrientation] = useState("portrait");
  const [color, setColor] = useState("natural");
  const [zoom, setZoom] = useState(0.62);

  const device = DEVICE_PRESETS.find((preset) => preset.name === deviceName) ?? DEVICE_PRESETS[0];

  return (
    <div className="app-shell">
      <aside className="controls">
        <h1>Device Bezels</h1>

        <label>
          <span>Device</span>
          <select value={deviceName} onChange={(event) => setDeviceName(event.target.value)}>
            {DEVICE_PRESETS.map((preset) => (
              <option key={preset.name} value={preset.name}>
                {preset.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Orientation</span>
          <div className="segments">
            {["portrait", "landscape"].map((value) => (
              <button
                aria-pressed={orientation === value}
                key={value}
                onClick={() => setOrientation(value)}
                type="button"
              >
                {value}
              </button>
            ))}
          </div>
        </label>

        <label>
          <span>Color</span>
          <div className="swatches">
            {colorOptions.map((value) => (
              <button
                aria-label={value}
                aria-pressed={color === value}
                key={value}
                onClick={() => setColor(value)}
                style={{ background: value === "natural" ? "#d8d2c4" : value }}
                type="button"
              />
            ))}
          </div>
        </label>

        <label>
          <span>Zoom</span>
          <input
            max="0.9"
            min="0.35"
            onChange={(event) => setZoom(Number(event.target.value))}
            step="0.01"
            type="range"
            value={zoom}
          />
        </label>
      </aside>

      <section className="preview">
        <DeviceFrame color={color} device={deviceName} orientation={orientation} zoom={zoom}>
          {/* <DemoScreen device={device} orientation={orientation} /> */}
          <div>
            <p>Hello world, this is a demo of the device bezels component. You can change the device, orientation, color, and zoom level using the controls on the left. The content inside the device bezel adjusts to the safe screen area. Try scrolling to see how it works.</p>
            <p>Hello world, this is a demo of the device bezels component. You can change the device, orientation, color, and zoom level using the controls on the left. The content inside the device bezel adjusts to the safe screen area. Try scrolling to see how it works.</p>
            <p>Hello world, this is a demo of the device bezels component. You can change the device, orientation, color, and zoom level using the controls on the left. The content inside the device bezel adjusts to the safe screen area. Try scrolling to see how it works.</p>
            <p>Hello world, this is a demo of the device bezels component. You can change the device, orientation, color, and zoom level using the controls on the left. The content inside the device bezel adjusts to the safe screen area. Try scrolling to see how it works.</p>
            <p>Hello world, this is a demo of the device bezels component. You can change the device, orientation, color, and zoom level using the controls on the left. The content inside the device bezel adjusts to the safe screen area. Try scrolling to see how it works.</p>
            <p>Hello world, this is a demo of the device bezels component. You can change the device, orientation, color, and zoom level using the controls on the left. The content inside the device bezel adjusts to the safe screen area. Try scrolling to see how it works.</p>
            <p>Hello world, this is a demo of the device bezels component. You can change the device, orientation, color, and zoom level using the controls on the left. The content inside the device bezel adjusts to the safe screen area. Try scrolling to see how it works.</p>
            <p>Hello world, this is a demo of the device bezels component. You can change the device, orientation, color, and zoom level using the controls on the left. The content inside the device bezel adjusts to the safe screen area. Try scrolling to see how it works.</p>
            
          </div>
        </DeviceFrame>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
