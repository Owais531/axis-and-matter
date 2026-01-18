import styles from "./TextArea.module.scss";

interface TextAreaProps {
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string,
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  required,
  disabled,
  value,
  name,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <textarea
        className={`${styles.text_area} ${error ? ('border border-red-800') : 'border border-white'} placeholder:text-white`}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        name={name}
        onChange={onChange}
      />
      <p className="text-xs text-red-800">{error || ''}</p>
    </div>
  );
};

export default TextArea;
