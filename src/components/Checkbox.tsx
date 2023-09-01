import { ChangeEvent } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding-right: 20px;
`;

const Checkmark = styled.span<{ checked: boolean }>`
  text-align: center;
  width: 20px;
  height: 20px;
  border: 2px solid #555;
  border-radius: 4px;
  margin-right: 8px;
  display: inline-block;
  background-color: ${(props) => (props.checked ? "#007bff" : "transparent")};
`;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxLabel = styled.span<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? "#aaa" : "inherit")};
`;

interface CheckboxProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, disabled, children }) => {
  return (
    <CheckboxContainer>
      <Checkmark checked={checked}>{checked && <span>&#10003;</span>}</Checkmark>
      <CheckboxLabel disabled={disabled}>{children}</CheckboxLabel>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
    </CheckboxContainer>
  );
};

export default Checkbox;
