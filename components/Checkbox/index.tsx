import React, { useState } from 'react';
import {
  CheckboxWrapper,
  HiddenCheckbox,
  Label,
  StyledCheckbox,
} from './styles';

type Props = {
  id: string;
  checked: boolean;
  onChange: (e) => void;
  label: string;
  gutterBottom?: boolean;
};

const Checkbox = (props: Props) => {
  const [focussed, setFocussed] = useState<boolean>(false);
  const { id, checked, onChange, label, gutterBottom } = props;
  const checkboxId = `checkbox-${id}`;

  const handleFocus = (shouldFocus: boolean) => {
    setFocussed(shouldFocus);
  };

  return (
    <CheckboxWrapper gutterBottom={gutterBottom} className="checkbox-wrapper">
      <HiddenCheckbox
        name={id}
        id={checkboxId}
        onChange={onChange}
        type="checkbox"
        checked={checked}
        onBlur={() => handleFocus(false)}
        onFocus={() => handleFocus(true)}
      />
      <StyledCheckbox
        onClick={onChange}
        className="checkbox"
        focussed={focussed}
      />
      <Label htmlFor={checkboxId}>{label}</Label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
