interface SliderProps {
  value: number;
  onSliderChange: React.ChangeEventHandler<HTMLInputElement>;
  min: number;
  max: number;
}
const Slider = ({ value, onSliderChange, min, max }: SliderProps) => {
  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onSliderChange}
        step="1"
        list="markers"
      />

      <datalist id="markers">
        <option value={Math.floor((min + max) / 2)}></option>
      </datalist>
    </>
  );
};

export default Slider;
