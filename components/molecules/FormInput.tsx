import Input from "../atoms/Input";
import Label from "../atoms/Label";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
}

export const FormInput = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
}: FormInputProps) => (
  <div className="w-full space-y-1">
    <Label htmlFor={id} className="capitalize">
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  </div>
);
