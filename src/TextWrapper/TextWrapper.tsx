import SampleTextSvg from "./SampleTextSvg";
import Slider from "./Slider";
import { StyledTextWrapper } from "./TextWrapper.styles";
import { useTextWrap } from "../hooks";

const TextWrapper = ({ min = 0, max = 10 }) => {
  const { sliderValRef, svgElementRef, rangeSliderValue, setRangeSliderValue } =
    useTextWrap(min, max);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeSliderValue(+e.target.value); // plus (+) operator changes the string value to number
    sliderValRef.current = rangeSliderValue;
  };

  return (
    <StyledTextWrapper>
      <SampleTextSvg ref={svgElementRef} />

      <Slider
        onSliderChange={handleSliderChange}
        value={rangeSliderValue}
        min={min}
        max={max}
      />
    </StyledTextWrapper>
  );
};

export default TextWrapper;
