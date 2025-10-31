import styles from "./TextField.module.scss";

interface TextFieldProps {
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  value: string;
  name: string;
  error?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange handler
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  disabled,
  required,
  value,
  name,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        className={`${styles.text_field} ${error ? ('border border-red-800') : 'border border-white'} placeholder:text-white`}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        value={value}
        name={name}
        onChange={onChange} // Bind the onChange handler
      />
      <p className="text-xs text-red-800">{error || ''}</p>
    </div>
  );
};

export default TextField;
