import { useState } from "react";

import SliderInputField from "../atoms/SliderInputField";
import RangeSlider from "../molecules/RangeSlider";

interface PriceRangeSelectorProps {
  minPrice: number;
  maxPrice: number;
}

const PriceRangeSelector: React.FC<PriceRangeSelectorProps> = ({
  minPrice,
  maxPrice,
}) => {
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const handleMinChange = (value: number) => {
    setMinValue(Math.min(value, maxValue));
  };

  const handleMaxChange = (value: number) => {
    setMaxValue(Math.max(value, minValue));
  };

  return (
    <div className="w-full max-w-xs py-6 pr-6 space-y-4">
      <h6 className="text-lg font-semibold max-sm:text-sm">Price</h6>
      <RangeSlider
        minPrice={minPrice}
        maxPrice={maxPrice}
        minValue={minValue}
        maxValue={maxValue}
        onMinChange={handleMinChange}
        onMaxChange={handleMaxChange}
      />
      <div className="flex justify-between">
        <SliderInputField
          label="Min Price"
          value={minValue}
          onChange={handleMinChange}
          min={minPrice}
          max={maxValue}
        />

        <SliderInputField
          label="Max Price"
          value={maxValue}
          onChange={handleMaxChange}
          min={minValue}
          max={maxPrice}
        />
      </div>
    </div>
  );
};

export default PriceRangeSelector;
