import Button, { Props as ButtonProps } from '../Button';
import Spinner from '../Spinner';

type Props = {
  loading?: boolean;
} & ButtonProps;

const ButtonRequest = (props: Props) => {
  const { children, loading, ...rest } = props;

  if (loading) {
    return (
      <Button disabled={loading} {...rest}>
        <Spinner />
      </Button>
    );
  }

  return <Button {...rest}>{children}</Button>;
};

export default ButtonRequest;
