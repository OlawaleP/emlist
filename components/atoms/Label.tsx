interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className="font-medium max-sm:text-sm py-2">
    {children}
  </label>
);

export default Label;
