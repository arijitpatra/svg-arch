/* eslint-disable @typescript-eslint/no-explicit-any */
// Uses the formula: y = r sinA
const getSinCurve = (xAxis: number, radius: number) =>
  10 * radius * Math.sin(xAxis / 120); // 120 is perodicity

export const archDownwards = (warp: any, radius: number) => {
  warp.transform(([x, y]: [number, number]) => [x, y + getSinCurve(x, radius)]);
};

export const archUpwards = (warp: any, radius: number) => {
  warp.transform(([x, y]: [number, number]) => [x, y - getSinCurve(x, radius)]);
};
