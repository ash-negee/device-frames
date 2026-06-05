# react-device-bezels

Pure SCSS React device bezels for iOS and Android phones and tablets.

The package exposes a typed React component and ships the frame styling as SCSS/CSS. Frames are built with CSS boxes, gradients, shadows, and custom properties. No image assets or SVG device shells are required.

## Features

- Typed React API
- Pure SCSS/CSS device shells
- iOS and Android phones, tablets, and foldables
- JSX, screenshots, videos, canvases, or any React children inside the screen
- Safe-area-aware scroll container for notches, Dynamic Island, punch-hole cameras, and landscape cutouts
- Device color, orientation, zoom, and custom screen dimensions

## Install

```sh
npm install react-device-bezels
```

## Usage

```tsx
import { DeviceFrame } from "react-device-bezels";
import "react-device-bezels/styles.css";

export function Preview() {
  return (
    <DeviceFrame device="iphone-15-pro" color="natural">
      <img src="/screenshot.png" alt="App screenshot" />
    </DeviceFrame>
  );
}
```

`children` can be any JSX, not only an image:

```tsx
import { DeviceFrame } from "react-device-bezels";
import "react-device-bezels/styles.css";

export function AppPreview() {
  return (
    <DeviceFrame device="iphone-16" color="blue">
      <main className="app-preview">
        <header>Today</header>
        <h1>Dashboard</h1>
        <button type="button">Create report</button>
      </main>
    </DeviceFrame>
  );
}
```

The frame only provides the device shell and screen clipping. Your app content, screenshot, canvas, video, or any other React children render inside `.df-device__screen`.

For full-bleed screenshots, pass the image as a child and make it fill the screen:

```tsx
<DeviceFrame device="pixel-9-pro" color="black">
  <img
    src="/screenshot.png"
    alt="App screenshot"
    style={{ display: "block", height: "100%", objectFit: "cover", width: "100%" }}
  />
</DeviceFrame>
```

## Props

```tsx
type DeviceFrameProps = {
  device?: DeviceName;
  color?: DeviceColor | string;
  orientation?: "portrait" | "landscape";
  landscape?: boolean;
  width?: number | string;
  height?: number | string;
  zoom?: number;
  className?: string;
  frameClassName?: string;
  screenClassName?: string;
  contentClassName?: string;
  screenStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  children?: React.ReactNode | ((props: DeviceFrameRenderProps) => React.ReactNode);
};
```

`orientation="landscape"` and `landscape` both render the frame sideways. `width` and `height` override the preset screen size before frame chrome is added. `zoom` scales the frame layout when using numeric dimensions. `color` accepts preset names such as `black`, `silver`, `gold`, `natural`, `blue`, `pink`, `green`, `white`, `yellow`, `purple`, `cream`, and `gray`, or any CSS color value.

Children render inside `.df-device__content`, a safe-area-aware scroll container. The package adds padding so content does not sit under the Dynamic Island, notch, punch-hole camera, or landscape cutout. Use `screenClassName`/`screenStyle` for the full screen background and `contentClassName`/`contentStyle` for the scrollable inner content. Scrollbars are hidden by default while scrolling remains enabled.

## Devices

`DeviceName` is inferred from `DEVICE_PRESETS`, so the TypeScript type always matches the exported preset list.

```tsx
import { DEVICE_PRESETS } from "react-device-bezels";

const deviceNames = DEVICE_PRESETS.map((device) => device.name);
```

The package currently includes 76 presets across these families:

- iPhone 16, 15, 14, 13, 12, 11, X/XR, 8 Plus, and SE
- iPad Pro, iPad Air, iPad, and iPad Mini
- Google Pixel 9, 8, 7, 6, Fold, and Pixel Tablet
- Samsung Galaxy S25, S24, S23, S22, Z Flip, Z Fold, and Galaxy Tab
- OnePlus 13, 12, and Open
- Xiaomi 15, 15 Ultra, and 14

## Custom SCSS

You can import the source SCSS if your app compiles Sass:

```scss
@use "react-device-bezels/styles.scss";
```

The outer element exposes custom properties for advanced styling:

```tsx
<DeviceFrame
  device="pixel-tablet"
  orientation="landscape"
  color="#2f3945"
  style={{
    "--df-bezel": "26px",
    "--df-frame-radius": "30px",
  } as React.CSSProperties}
/>
```

## Build

```sh
npm install
npm run check
```

`npm run check` typechecks, builds ESM/CJS/type declarations, compiles CSS, and runs an npm pack dry-run.

## Publishing

Before publishing, fill in `author`, `repository`, `homepage`, and `bugs` in `package.json`.

```sh
npm login
npm publish --dry-run
npm publish --access public
```

If npm blocks the unscoped package name at publish time, publish under a scope such as `@your-scope/react-device-bezels`.
