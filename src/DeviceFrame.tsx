import type { CSSProperties, ReactNode } from "react";

export type DeviceOrientation = "portrait" | "landscape";

export type DeviceColor =
  | "black"
  | "cream"
  | "graphite"
  | "gray"
  | "silver"
  | "gold"
  | "natural"
  | "blue"
  | "pink"
  | "purple"
  | "white"
  | "yellow"
  | "green"
  | (string & {});

type DevicePresetInput = {
  bezel: number;
  name: string;
  label: string;
  platform: "ios" | "android";
  kind: "phone" | "tablet";
  width: number;
  height: number;
  defaultColor: DeviceColor;
  colors: readonly DeviceColor[];
};

export type DeviceFrameRenderProps = {
  device: DevicePreset;
  orientation: DeviceOrientation;
  screenWidth: number | string;
  screenHeight: number | string;
};

export type DeviceFrameProps = {
  children?: ReactNode | ((props: DeviceFrameRenderProps) => ReactNode);
  className?: string;
  color?: DeviceColor;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  device?: DeviceName;
  frameClassName?: string;
  height?: number | string;
  landscape?: boolean;
  orientation?: DeviceOrientation;
  screenClassName?: string;
  screenStyle?: CSSProperties;
  style?: CSSProperties;
  width?: number | string;
  zoom?: number;
};

type DeviceFrameCSSProperties = CSSProperties & {
  "--df-device-color"?: string;
  "--df-device-height"?: string;
  "--df-device-outer-height"?: string;
  "--df-device-outer-width"?: string;
  "--df-device-scaled-height"?: string;
  "--df-device-scaled-width"?: string;
  "--df-device-width"?: string;
  "--df-zoom"?: number;
};

const COLOR_VALUES: Record<string, string> = {
  black: "#17181c",
  blue: "#7ea8d8",
  cream: "#f2eadf",
  gold: "#f4d7a1",
  graphite: "#3f4048",
  gray: "#a5a8ad",
  green: "#9fbf9a",
  natural: "#d8d2c4",
  pink: "#efb7bd",
  purple: "#b8a9d9",
  silver: "#e7e8e4",
  white: "#f7f7f4",
  yellow: "#f2dc84",
};

export const DEFAULT_DEVICE = "iphone-15";

export const DEVICE_PRESETS = [
  {
    bezel: 13,
    colors: ["black", "silver", "blue", "pink", "green"],
    defaultColor: "black",
    height: 852,
    kind: "phone",
    label: "iPhone 16",
    name: "iphone-16",
    platform: "ios",
    width: 393,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "blue", "pink", "green"],
    defaultColor: "black",
    height: 932,
    kind: "phone",
    label: "iPhone 16 Plus",
    name: "iphone-16-plus",
    platform: "ios",
    width: 430,
  },
  {
    bezel: 13,
    colors: ["natural", "black", "white", "gold"],
    defaultColor: "natural",
    height: 874,
    kind: "phone",
    label: "iPhone 16 Pro",
    name: "iphone-16-pro",
    platform: "ios",
    width: 402,
  },
  {
    bezel: 13,
    colors: ["natural", "black", "white", "gold"],
    defaultColor: "natural",
    height: 956,
    kind: "phone",
    label: "iPhone 16 Pro Max",
    name: "iphone-16-pro-max",
    platform: "ios",
    width: 440,
  },
  {
    bezel: 14,
    colors: ["black", "white"],
    defaultColor: "black",
    height: 844,
    kind: "phone",
    label: "iPhone 16e",
    name: "iphone-16e",
    platform: "ios",
    width: 390,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "blue", "pink", "green"],
    defaultColor: "black",
    height: 852,
    kind: "phone",
    label: "iPhone 15",
    name: "iphone-15",
    platform: "ios",
    width: 393,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "blue", "pink", "green"],
    defaultColor: "black",
    height: 932,
    kind: "phone",
    label: "iPhone 15 Plus",
    name: "iphone-15-plus",
    platform: "ios",
    width: 430,
  },
  {
    bezel: 13,
    colors: ["natural", "blue", "white", "black"],
    defaultColor: "natural",
    height: 852,
    kind: "phone",
    label: "iPhone 15 Pro",
    name: "iphone-15-pro",
    platform: "ios",
    width: 393,
  },
  {
    bezel: 13,
    colors: ["natural", "blue", "white", "black"],
    defaultColor: "natural",
    height: 932,
    kind: "phone",
    label: "iPhone 15 Pro Max",
    name: "iphone-15-pro-max",
    platform: "ios",
    width: 430,
  },
  {
    bezel: 13,
    colors: ["black", "white", "blue", "pink", "yellow"],
    defaultColor: "black",
    height: 844,
    kind: "phone",
    label: "iPhone 14",
    name: "iphone-14",
    platform: "ios",
    width: 390,
  },
  {
    bezel: 13,
    colors: ["black", "white", "blue", "pink", "yellow"],
    defaultColor: "black",
    height: 926,
    kind: "phone",
    label: "iPhone 14 Plus",
    name: "iphone-14-plus",
    platform: "ios",
    width: 428,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "gold", "purple"],
    defaultColor: "black",
    height: 852,
    kind: "phone",
    label: "iPhone 14 Pro",
    name: "iphone-14-pro",
    platform: "ios",
    width: 393,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "gold", "purple"],
    defaultColor: "black",
    height: 932,
    kind: "phone",
    label: "iPhone 14 Pro Max",
    name: "iphone-14-pro-max",
    platform: "ios",
    width: 430,
  },
  {
    bezel: 13,
    colors: ["black", "white", "blue", "pink", "green"],
    defaultColor: "black",
    height: 844,
    kind: "phone",
    label: "iPhone 13",
    name: "iphone-13",
    platform: "ios",
    width: 390,
  },
  {
    bezel: 13,
    colors: ["black", "white", "blue", "pink", "green"],
    defaultColor: "black",
    height: 780,
    kind: "phone",
    label: "iPhone 13 Mini",
    name: "iphone-13-mini",
    platform: "ios",
    width: 360,
  },
  {
    bezel: 13,
    colors: ["graphite", "silver", "gold", "blue", "green"],
    defaultColor: "graphite",
    height: 844,
    kind: "phone",
    label: "iPhone 13 Pro",
    name: "iphone-13-pro",
    platform: "ios",
    width: 390,
  },
  {
    bezel: 13,
    colors: ["graphite", "silver", "gold", "blue", "green"],
    defaultColor: "graphite",
    height: 926,
    kind: "phone",
    label: "iPhone 13 Pro Max",
    name: "iphone-13-pro-max",
    platform: "ios",
    width: 428,
  },
  {
    bezel: 13,
    colors: ["black", "white", "blue", "green", "purple"],
    defaultColor: "black",
    height: 844,
    kind: "phone",
    label: "iPhone 12",
    name: "iphone-12",
    platform: "ios",
    width: 390,
  },
  {
    bezel: 13,
    colors: ["black", "white", "blue", "green", "purple"],
    defaultColor: "black",
    height: 780,
    kind: "phone",
    label: "iPhone 12 Mini",
    name: "iphone-12-mini",
    platform: "ios",
    width: 360,
  },
  {
    bezel: 13,
    colors: ["graphite", "silver", "gold", "blue"],
    defaultColor: "graphite",
    height: 844,
    kind: "phone",
    label: "iPhone 12 Pro",
    name: "iphone-12-pro",
    platform: "ios",
    width: 390,
  },
  {
    bezel: 13,
    colors: ["graphite", "silver", "gold", "blue"],
    defaultColor: "graphite",
    height: 926,
    kind: "phone",
    label: "iPhone 12 Pro Max",
    name: "iphone-12-pro-max",
    platform: "ios",
    width: 428,
  },
  {
    bezel: 13,
    colors: ["black", "white", "green", "yellow", "purple"],
    defaultColor: "black",
    height: 896,
    kind: "phone",
    label: "iPhone 11",
    name: "iphone-11",
    platform: "ios",
    width: 414,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "gold", "green"],
    defaultColor: "black",
    height: 812,
    kind: "phone",
    label: "iPhone 11 Pro",
    name: "iphone-11-pro",
    platform: "ios",
    width: 375,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "gold", "green"],
    defaultColor: "black",
    height: 896,
    kind: "phone",
    label: "iPhone 11 Pro Max",
    name: "iphone-11-pro-max",
    platform: "ios",
    width: 414,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "gold"],
    defaultColor: "black",
    height: 812,
    kind: "phone",
    label: "iPhone X / XS",
    name: "iphone-x",
    platform: "ios",
    width: 375,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "gold"],
    defaultColor: "black",
    height: 896,
    kind: "phone",
    label: "iPhone XR / XS Max",
    name: "iphone-xr",
    platform: "ios",
    width: 414,
  },
  {
    bezel: 18,
    colors: ["black", "silver", "gold"],
    defaultColor: "black",
    height: 736,
    kind: "phone",
    label: "iPhone 8 Plus",
    name: "iphone-8-plus",
    platform: "ios",
    width: 414,
  },
  {
    bezel: 18,
    colors: ["black", "silver", "gold"],
    defaultColor: "black",
    height: 667,
    kind: "phone",
    label: "iPhone SE",
    name: "iphone-se",
    platform: "ios",
    width: 375,
  },
  {
    bezel: 32,
    colors: ["silver", "graphite"],
    defaultColor: "silver",
    height: 1366,
    kind: "tablet",
    label: "iPad Pro",
    name: "ipad-pro",
    platform: "ios",
    width: 1024,
  },
  {
    bezel: 32,
    colors: ["silver", "graphite"],
    defaultColor: "silver",
    height: 1210,
    kind: "tablet",
    label: "iPad Pro 11",
    name: "ipad-pro-11",
    platform: "ios",
    width: 834,
  },
  {
    bezel: 32,
    colors: ["silver", "graphite"],
    defaultColor: "silver",
    height: 1376,
    kind: "tablet",
    label: "iPad Pro 13",
    name: "ipad-pro-13",
    platform: "ios",
    width: 1032,
  },
  {
    bezel: 30,
    colors: ["silver", "blue", "pink", "purple"],
    defaultColor: "silver",
    height: 1180,
    kind: "tablet",
    label: "iPad Air 11",
    name: "ipad-air-11",
    platform: "ios",
    width: 820,
  },
  {
    bezel: 30,
    colors: ["silver", "blue", "pink", "purple"],
    defaultColor: "silver",
    height: 1366,
    kind: "tablet",
    label: "iPad Air 13",
    name: "ipad-air-13",
    platform: "ios",
    width: 1024,
  },
  {
    bezel: 30,
    colors: ["silver", "blue", "pink", "yellow"],
    defaultColor: "silver",
    height: 1080,
    kind: "tablet",
    label: "iPad 10.9",
    name: "ipad-10",
    platform: "ios",
    width: 810,
  },
  {
    bezel: 28,
    colors: ["silver", "pink", "blue"],
    defaultColor: "silver",
    height: 1133,
    kind: "tablet",
    label: "iPad Mini",
    name: "ipad-mini",
    platform: "ios",
    width: 744,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "blue", "pink"],
    defaultColor: "black",
    height: 915,
    kind: "phone",
    label: "Pixel 9",
    name: "pixel-9",
    platform: "android",
    width: 412,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "pink", "green"],
    defaultColor: "black",
    height: 915,
    kind: "phone",
    label: "Pixel 9 Pro",
    name: "pixel-9-pro",
    platform: "android",
    width: 412,
  },
  {
    bezel: 13,
    colors: ["black", "silver", "pink", "green"],
    defaultColor: "black",
    height: 997,
    kind: "phone",
    label: "Pixel 9 Pro XL",
    name: "pixel-9-pro-xl",
    platform: "android",
    width: 448,
  },
  {
    bezel: 13,
    colors: ["black", "silver"],
    defaultColor: "black",
    height: 892,
    kind: "tablet",
    label: "Pixel 9 Pro Fold",
    name: "pixel-9-pro-fold",
    platform: "android",
    width: 841,
  },
  {
    bezel: 12,
    colors: ["black", "blue", "green", "pink"],
    defaultColor: "black",
    height: 915,
    kind: "phone",
    label: "Pixel 8",
    name: "pixel-8",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "blue", "white"],
    defaultColor: "black",
    height: 998,
    kind: "phone",
    label: "Pixel 8 Pro",
    name: "pixel-8-pro",
    platform: "android",
    width: 448,
  },
  {
    bezel: 12,
    colors: ["black", "green", "blue"],
    defaultColor: "black",
    height: 915,
    kind: "phone",
    label: "Pixel 8a",
    name: "pixel-8a",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "white", "green"],
    defaultColor: "black",
    height: 915,
    kind: "phone",
    label: "Pixel 7",
    name: "pixel-7",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "white", "green"],
    defaultColor: "black",
    height: 892,
    kind: "phone",
    label: "Pixel 7 Pro",
    name: "pixel-7-pro",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "green", "white"],
    defaultColor: "black",
    height: 914,
    kind: "phone",
    label: "Pixel 7a",
    name: "pixel-7a",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "green", "pink"],
    defaultColor: "black",
    height: 915,
    kind: "phone",
    label: "Pixel 6",
    name: "pixel-6",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "white", "gold"],
    defaultColor: "black",
    height: 892,
    kind: "phone",
    label: "Pixel 6 Pro",
    name: "pixel-6-pro",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "blue", "white"],
    defaultColor: "black",
    height: 892,
    kind: "phone",
    label: "Pixel 6a",
    name: "pixel-6a",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "blue"],
    defaultColor: "black",
    height: 780,
    kind: "phone",
    label: "Galaxy S25",
    name: "galaxy-s25",
    platform: "android",
    width: 360,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "blue"],
    defaultColor: "black",
    height: 891,
    kind: "phone",
    label: "Galaxy S25+",
    name: "galaxy-s25-plus",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "blue", "gray"],
    defaultColor: "black",
    height: 824,
    kind: "phone",
    label: "Galaxy S25 Ultra",
    name: "galaxy-s25-ultra",
    platform: "android",
    width: 384,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "gold"],
    defaultColor: "black",
    height: 780,
    kind: "phone",
    label: "Galaxy S24",
    name: "galaxy-s24",
    platform: "android",
    width: 360,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "gold"],
    defaultColor: "black",
    height: 891,
    kind: "phone",
    label: "Galaxy S24+",
    name: "galaxy-s24-plus",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "gold"],
    defaultColor: "black",
    height: 824,
    kind: "phone",
    label: "Galaxy S24 Ultra",
    name: "galaxy-s24-ultra",
    platform: "android",
    width: 384,
  },
  {
    bezel: 12,
    colors: ["black", "cream", "green", "purple"],
    defaultColor: "black",
    height: 780,
    kind: "phone",
    label: "Galaxy S23",
    name: "galaxy-s23",
    platform: "android",
    width: 360,
  },
  {
    bezel: 12,
    colors: ["black", "cream", "green", "purple"],
    defaultColor: "black",
    height: 891,
    kind: "phone",
    label: "Galaxy S23+",
    name: "galaxy-s23-plus",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "cream", "green"],
    defaultColor: "black",
    height: 824,
    kind: "phone",
    label: "Galaxy S23 Ultra",
    name: "galaxy-s23-ultra",
    platform: "android",
    width: 384,
  },
  {
    bezel: 12,
    colors: ["black", "white", "green", "pink"],
    defaultColor: "black",
    height: 780,
    kind: "phone",
    label: "Galaxy S22",
    name: "galaxy-s22",
    platform: "android",
    width: 360,
  },
  {
    bezel: 12,
    colors: ["black", "white", "green", "pink"],
    defaultColor: "black",
    height: 891,
    kind: "phone",
    label: "Galaxy S22+",
    name: "galaxy-s22-plus",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "white", "green"],
    defaultColor: "black",
    height: 824,
    kind: "phone",
    label: "Galaxy S22 Ultra",
    name: "galaxy-s22-ultra",
    platform: "android",
    width: 384,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "green", "purple"],
    defaultColor: "black",
    height: 883,
    kind: "phone",
    label: "Galaxy Z Flip 6",
    name: "galaxy-z-flip-6",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "blue"],
    defaultColor: "black",
    height: 883,
    kind: "phone",
    label: "Galaxy Z Flip 5",
    name: "galaxy-z-flip-5",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "pink"],
    defaultColor: "black",
    height: 768,
    kind: "tablet",
    label: "Galaxy Z Fold 6",
    name: "galaxy-z-fold-6",
    platform: "android",
    width: 968,
  },
  {
    bezel: 12,
    colors: ["black", "silver", "blue"],
    defaultColor: "black",
    height: 812,
    kind: "tablet",
    label: "Galaxy Z Fold 5",
    name: "galaxy-z-fold-5",
    platform: "android",
    width: 884,
  },
  {
    bezel: 12,
    colors: ["black", "green"],
    defaultColor: "black",
    height: 914,
    kind: "phone",
    label: "OnePlus 13",
    name: "oneplus-13",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "green", "white"],
    defaultColor: "black",
    height: 914,
    kind: "phone",
    label: "OnePlus 12",
    name: "oneplus-12",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "blue"],
    defaultColor: "black",
    height: 914,
    kind: "phone",
    label: "OnePlus Open",
    name: "oneplus-open",
    platform: "android",
    width: 814,
  },
  {
    bezel: 12,
    colors: ["black", "white", "green"],
    defaultColor: "black",
    height: 915,
    kind: "phone",
    label: "Xiaomi 15",
    name: "xiaomi-15",
    platform: "android",
    width: 412,
  },
  {
    bezel: 12,
    colors: ["black", "white", "green"],
    defaultColor: "black",
    height: 920,
    kind: "phone",
    label: "Xiaomi 15 Ultra",
    name: "xiaomi-15-ultra",
    platform: "android",
    width: 424,
  },
  {
    bezel: 12,
    colors: ["black", "white", "green"],
    defaultColor: "black",
    height: 915,
    kind: "phone",
    label: "Xiaomi 14",
    name: "xiaomi-14",
    platform: "android",
    width: 412,
  },
  {
    bezel: 30,
    colors: ["silver", "green"],
    defaultColor: "silver",
    height: 1280,
    kind: "tablet",
    label: "Pixel Tablet",
    name: "pixel-tablet",
    platform: "android",
    width: 800,
  },
  {
    bezel: 30,
    colors: ["graphite", "silver"],
    defaultColor: "graphite",
    height: 1472,
    kind: "tablet",
    label: "Galaxy Tab S10 Ultra",
    name: "galaxy-tab-s10-ultra",
    platform: "android",
    width: 920,
  },
  {
    bezel: 30,
    colors: ["graphite", "silver"],
    defaultColor: "graphite",
    height: 1096,
    kind: "tablet",
    label: "Galaxy Tab S10+",
    name: "galaxy-tab-s10-plus",
    platform: "android",
    width: 686,
  },
  {
    bezel: 30,
    colors: ["graphite", "silver"],
    defaultColor: "graphite",
    height: 1600,
    kind: "tablet",
    label: "Galaxy Tab S9 Ultra",
    name: "galaxy-tab-s9-ultra",
    platform: "android",
    width: 1024,
  },
  {
    bezel: 30,
    colors: ["graphite", "silver"],
    defaultColor: "graphite",
    height: 1096,
    kind: "tablet",
    label: "Galaxy Tab S9+",
    name: "galaxy-tab-s9-plus",
    platform: "android",
    width: 686,
  },
  {
    bezel: 30,
    colors: ["graphite", "silver"],
    defaultColor: "graphite",
    height: 1340,
    kind: "tablet",
    label: "Galaxy Tab",
    name: "galaxy-tab",
    platform: "android",
    width: 800,
  },
] as const satisfies readonly DevicePresetInput[];

export type DevicePreset = (typeof DEVICE_PRESETS)[number];

export type DeviceName = DevicePreset["name"];

function getFrontFeature(preset: DevicePreset): "classic" | "fold" | "island" | "notch" | "punch" | "tablet" {
  const { kind, name, platform } = preset;

  if (name === "iphone-se" || name === "iphone-8-plus") {
    return "classic";
  }

  if (kind === "tablet" && !name.includes("fold")) {
    return "tablet";
  }

  if (name.includes("fold") || name === "oneplus-open") {
    return "fold";
  }

  if (platform === "android") {
    return "punch";
  }

  if (
    name === "iphone-16e" ||
    name === "iphone-14" ||
    name === "iphone-14-plus" ||
    name.startsWith("iphone-13") ||
    name.startsWith("iphone-12") ||
    name.startsWith("iphone-11") ||
    name === "iphone-x" ||
    name === "iphone-xr"
  ) {
    return "notch";
  }

  return "island";
}

function getShapeFeature(preset: DevicePreset): "classic" | "fold" | "rounded" | "squared" {
  if (preset.name === "iphone-se" || preset.name === "iphone-8-plus") {
    return "classic";
  }

  if (preset.name.includes("fold") || preset.name === "oneplus-open") {
    return "fold";
  }

  if (preset.name.includes("ultra")) {
    return "squared";
  }

  return "rounded";
}

function hasActionButton(name: DeviceName): boolean {
  return name.startsWith("iphone-16") || name === "iphone-15-pro" || name === "iphone-15-pro-max";
}

function hasCameraControl(name: DeviceName): boolean {
  return name.startsWith("iphone-16") && name !== "iphone-16e";
}

function hasLandscapeTabletCamera(preset: DevicePreset): boolean {
  return preset.kind === "tablet" && preset.name !== "ipad-mini" && !preset.name.includes("fold");
}

const PRESET_MAP = new Map<DeviceName, DevicePreset>(
  DEVICE_PRESETS.map((preset) => [preset.name, preset]),
);

export function isDeviceName(value: string): value is DeviceName {
  return PRESET_MAP.has(value as DeviceName);
}

export function getDevicePreset(device: DeviceName = DEFAULT_DEVICE): DevicePreset {
  return PRESET_MAP.get(device) ?? PRESET_MAP.get(DEFAULT_DEVICE)!;
}

function cssLength(value: number | string): string {
  return typeof value === "number" ? `${value}px` : value;
}

function frameLength(value: number | string, bezel: number): string {
  return typeof value === "number"
    ? `${value + bezel + bezel}px`
    : `calc(${value} + ${bezel}px + ${bezel}px)`;
}

function scaledFrameLength(value: number | string, bezel: number, zoom: number): string {
  return typeof value === "number" ? `${(value + bezel + bezel) * zoom}px` : frameLength(value, bezel);
}

function resolveColor(color: DeviceColor): string {
  return COLOR_VALUES[color] ?? color;
}

function joinClassNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function DeviceFrame({
  children,
  className,
  color,
  contentClassName,
  contentStyle,
  device = DEFAULT_DEVICE,
  frameClassName,
  height,
  landscape,
  orientation,
  screenClassName,
  screenStyle,
  style,
  width,
  zoom = 1,
}: DeviceFrameProps) {
  const preset = getDevicePreset(device);
  const resolvedOrientation = orientation ?? (landscape ? "landscape" : "portrait");
  const resolvedColor = color ?? preset.defaultColor;
  const isLandscape = resolvedOrientation === "landscape";
  const portraitWidth = width ?? preset.width;
  const portraitHeight = height ?? preset.height;
  const screenWidth = isLandscape ? portraitHeight : portraitWidth;
  const screenHeight = isLandscape ? portraitWidth : portraitHeight;

  const frameStyle: DeviceFrameCSSProperties = {
    "--df-device-color": resolveColor(resolvedColor),
    "--df-device-height": cssLength(screenHeight),
    "--df-device-outer-height": frameLength(screenHeight, preset.bezel),
    "--df-device-outer-width": frameLength(screenWidth, preset.bezel),
    "--df-device-scaled-height": scaledFrameLength(screenHeight, preset.bezel, zoom),
    "--df-device-scaled-width": scaledFrameLength(screenWidth, preset.bezel, zoom),
    "--df-device-width": cssLength(screenWidth),
    "--df-zoom": zoom,
    ...style,
  };

  const renderProps: DeviceFrameRenderProps = {
    device: preset,
    orientation: resolvedOrientation,
    screenHeight,
    screenWidth,
  };

  return (
    <div
      className={joinClassNames(
        "df-device",
        `df-device--${preset.platform}`,
        `df-device--${preset.kind}`,
        `df-device--${preset.name}`,
        `df-device--${resolvedOrientation}`,
        `df-device--front-${getFrontFeature(preset)}`,
        `df-device--shape-${getShapeFeature(preset)}`,
        hasActionButton(preset.name) && "df-device--has-action-button",
        hasCameraControl(preset.name) && "df-device--has-camera-control",
        hasLandscapeTabletCamera(preset) && "df-device--has-landscape-tablet-camera",
        className,
      )}
      data-device={preset.name}
      data-orientation={resolvedOrientation}
      style={frameStyle}
    >
      <div className={joinClassNames("df-device__hardware", frameClassName)}>
        <div className="df-device__button df-device__button--power" />
        <div className="df-device__button df-device__button--action" />
        <div className="df-device__button df-device__button--volume-up" />
        <div className="df-device__button df-device__button--volume-down" />
        <div className="df-device__button df-device__button--camera-control" />
        <div className="df-device__camera" />
        <div className="df-device__speaker" />
        <div className="df-device__screen-ring">
          <div className={joinClassNames("df-device__screen", screenClassName)} style={screenStyle}>
            <div className={joinClassNames("df-device__content", contentClassName)} style={contentStyle}>
              {typeof children === "function" ? children(renderProps) : children}
            </div>
          </div>
        </div>
        <div className="df-device__home" />
      </div>
    </div>
  );
}
