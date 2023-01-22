import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import React, { useEffect, useRef, useState } from "react";

const Slider = (props: { total: any; setTotal: any; disabled: any; setValue: any; }) => {
  const { total, setTotal, disabled, setValue } = props;
  let initTotal = total;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [left] = useState(100 - initTotal);
  const ref = useRef(null);
  var el2;
  const updated = () => {
    el2 = ref.current;
    setMin(Math.round(el2.sliderValue.min));
    setMax(Math.round(el2.sliderValue.max));
    setTotal(Math.round(el2.sliderValue.max));
    setValue(Math.round(el2.sliderValue.max) - Math.round(el2.sliderValue.min));
    console.log(el2.sliderValue);
  }
  useEffect(() => updated, []);
  return (
    <div className="w-full h-full gap-5 flex-row justify-start items-center">
      <h1 className="text-xl text-black mb-2">{max - min}%</h1>
      <RangeSlider id="range-slider-gradient" defaultValue={[initTotal, initTotal + left / 2]} thumbsDisabled={[true, false]} max={100} ref={ref} onThumbDragEnd={updated} step={1} className="w-2/3" disabled={disabled} />

    </div>
  )
}

export default Slider