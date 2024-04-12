import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Warp from "warpjs";
import { archDownwards, archUpwards } from "../utils";

export const useTextWrap = (min: number, max: number) => {
  const [rangeSliderValue, setRangeSliderValue] = useState(
    Math.floor((min + max) / 2)
  );
  const sliderValRef = useRef(rangeSliderValue); // here we are storing the old slider value
  const svgElementRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgElementRefCurrent = svgElementRef.current;

    if (svgElementRefCurrent) {
      let delta = 0;
      const sliderValRefCurrent = sliderValRef.current;
      const warp = new Warp(svgElementRefCurrent);

      // if slider value is decreasing arch downwards, else arch upwards
      if (sliderValRefCurrent > rangeSliderValue) {
        delta = sliderValRefCurrent - rangeSliderValue;
        archDownwards(warp, delta);
      } else {
        delta = rangeSliderValue - sliderValRefCurrent;
        archUpwards(warp, delta);
      }
    }
  }, [rangeSliderValue]);

  return {
    sliderValRef,
    svgElementRef,
    rangeSliderValue,
    setRangeSliderValue,
  };
};
