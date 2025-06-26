import CustomButton from "../atoms/CustomButton";

interface NavigationButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
  nextHref?: string;
  prevHref?: string;
}

const NavigationButtons = ({
  onNext,
  onPrev,
  prevHref,
  nextHref,
}: NavigationButtonsProps) => {
  return (
    <div className="flex gap-2 justify-end max-sm:justify-center">
      {onPrev && (
        <CustomButton href={prevHref} onClick={onPrev}>
          Back
        </CustomButton>
      )}
      {onNext && (
        <CustomButton href={nextHref} onClick={onNext}>
          Next
        </CustomButton>
      )}
    </div>
  );
};

export default NavigationButtons;
