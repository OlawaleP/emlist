import PriceRangeSelector from "./PriceRangeSelector";

interface PriceRangeSelectorWrapperProps {
  minValue: number;
  maxValue: number;
  handleMinChange: (minValue: number) => void;
  handleMaxChange: (maxValue: number) => void;
}

export default function PriceRangeSelectorWrapper({
  minValue,
  maxValue,
  handleMinChange,
  handleMaxChange,
}: PriceRangeSelectorWrapperProps) {
  return (
    <PriceRangeSelector
      minPrice={0}
      maxPrice={10000000000}
      minValue={minValue}
      maxValue={maxValue}
      handleMinChange={handleMinChange}
      handleMaxChange={handleMaxChange}
    />
  );
}
