import { StyledInput, Label } from './styles';

type Props = {
  name: string;
  label: string;
  onChange: (e) => void;
  value: string;
  placeholder?: string;
  type?: 'text';
  onFocus?: () => void;
  onBlur?: () => void;
  gutterBottom?: boolean;
};

const Input = (props: Props) => {
  const { name, label, ...rest } = props;
  const inputId = `input-${name}`;

  return (
    <div>
      {/* @ts-ignore */}
      <Label htmlFor={inputId}>{label}</Label>
      <StyledInput {...rest} id={inputId} />
    </div>
  );
};

export default Input;
