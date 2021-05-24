import { FormikErrors } from 'formik';
import { StyledInputError } from './styles';

type Props = {
  message?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
};

const InputError = (props: Props) => {
  return <StyledInputError>{props.message}</StyledInputError>;
};

export default InputError;
