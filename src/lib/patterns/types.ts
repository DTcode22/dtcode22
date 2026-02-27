export interface SpiralPatternParams {
  speed: number;
  scale: number;
  intensity: number;
  distortion: number;
  dotSize: number;
  xMax: number;
  yMax: number;
  xDivisor: number;
  xSubtractor: number;
  yDivisor: number;
  ySubtractor: number;
  oDivisor: number;
  yDivFactor: number;
  cosMultiplier: number;
  koMultiplier: number;
  xScale: number;
  step: number;
  xOffset: number;
  yOffset: number;
  eoMultiplier: number;
}

export type RenderPatternFn = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  params: SpiralPatternParams,
  time: number
) => void;
