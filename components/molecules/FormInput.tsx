import Input from "../atoms/Input";
import Label from "../atoms/Label";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const FormInput = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
}: FormInputProps) => (
  <div className="w-full">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);
