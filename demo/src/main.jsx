import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { DEVICE_PRESETS, DeviceFrame } from "../../src";
import "../../src/styles/device-frames.scss";
import "./styles.css";

const colorOptions = ["black", "silver", "natural", "gold", "blue", "pink", "green", "white"];
const screenshotBase = `${import.meta.env.BASE_URL}screenshots`;

function getInitialValue(name, fallback) {
  return new URLSearchParams(window.location.search).get(name) ?? fallback;
}

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
        <div className="demo-badge">React device frames</div>
        <h1>{device.label}</h1>
        <p className="demo-lede">
          Render scrollable JSX inside realistic CSS-only bezels for iPhone, iPad, Pixel, Galaxy,
          Android phones, and tablets.
        </p>
        <div className="demo-grid">
          {rows.map(([label, value]) => (
            <div key={label} className="demo-row">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <pre className="demo-code">
          <code>npm i react-device-bezels</code>
        </pre>
        <div className="demo-list">
          {[
            "Safe screen padding keeps content away from notches, sensors, and home indicators.",
            "Portrait and landscape modes adjust buttons, cameras, and screen geometry.",
            "Custom colors and zoom controls make screenshots easy to compose.",
            "Use it in docs, launch pages, portfolios, internal tools, or app store assets.",
            "The frame is SCSS/CSS driven, so the package stays lightweight.",
            "Children are regular React nodes, not a static screenshot-only image slot.",
          ].map((item, index) => (
            <article key={item} className="demo-list-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

function App() {
  const [deviceName, setDeviceName] = useState(getInitialValue("device", "iphone-16"));
  const [orientation, setOrientation] = useState(getInitialValue("orientation", "portrait"));
  const [color, setColor] = useState(getInitialValue("color", "natural"));
  const [zoom, setZoom] = useState(Number(getInitialValue("zoom", "0.62")));

  const device = DEVICE_PRESETS.find((preset) => preset.name === deviceName) ?? DEVICE_PRESETS[0];

  return (
    <div className="app-shell">
      <aside className="controls">
        <h1>Device Bezels</h1>
        <p className="controls-intro">
          CSS-only iPhone, iPad, Android, Pixel, and Galaxy frames for React app previews,
          screenshots, docs, and product pages.
        </p>
        <nav className="project-links" aria-label="Project links">
          <a href="https://github.com/ash-negee/device-frames" rel="noreferrer" target="_blank">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.8 10.8 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16v3.18c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>
          <a href="https://www.npmjs.com/package/react-device-bezels" rel="noreferrer" target="_blank">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M1.5 7h21v10h-6v-6h-3v6h-12V7Zm3 8h3v-6h-3v6Zm5 0h2v-6h-2v6Zm9 0h1v-6h-4v6h1v-4h2v4Z" />
            </svg>
            npm
          </a>
        </nav>

        <section className="package-card" aria-labelledby="install-title">
          <h2 id="install-title">Install</h2>
          <code>npm i react-device-bezels</code>
        </section>

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

        <section className="preview-assets" aria-labelledby="screenshots-title">
          <h2 id="screenshots-title">Screenshots</h2>
          <img
            alt="React Device Bezels demo showing an iPhone 16 CSS device frame"
            src={`${screenshotBase}/iphone-16.png`}
          />
          <img
            alt="React Device Bezels demo showing a Galaxy S25 Ultra CSS device frame in landscape"
            src={`${screenshotBase}/galaxy-s25-ultra-landscape.png`}
          />
        </section>
      </aside>

      <section className="preview">
        <DeviceFrame color={color} device={deviceName} orientation={orientation} zoom={zoom}>
          <DemoScreen device={device} orientation={orientation} />
        </DeviceFrame>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
