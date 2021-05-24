import { FormikErrors } from 'formik';
import InputError from '../InputError';
import { StyledInput, Label, Wrapper } from './styles';

type Props = {
  name: string;
  label: string;
  onChange: (e) => void;
  value: string;
  placeholder?: string;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  type?: 'text';
  onFocus?: () => void;
  onBlur?: () => void;
  gutterBottom?: boolean;
};

const Input = (props: Props) => {
  const { name, label, error, gutterBottom, ...rest } = props;
  const inputId = `input-${name}`;

  return (
    <Wrapper gutterBottom={gutterBottom}>
      {/* @ts-ignore */}
      <Label htmlFor={inputId}>{label}</Label>
      <StyledInput {...rest} id={inputId} name={name} />
      <InputError message={error} />
    </Wrapper>
  );
};

export default Input;
