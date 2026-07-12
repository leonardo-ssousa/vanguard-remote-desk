import type { InputHTMLAttributes } from "react";
import { InputContainer, InputHeader, InputWrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

export const Input = ({ title, ...rest }: InputProps) => {
  return (
    <InputWrapper>
    {
      title &&
      <InputHeader>{title}</InputHeader>
    }
    <InputContainer>
      <input {...rest}/>
    </InputContainer>
    </InputWrapper>
  )
}