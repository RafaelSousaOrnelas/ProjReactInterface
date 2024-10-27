import { Controller } from "react-hook-form";
import { ErrorText, IconContainer, InputContainer, InputText } from "./styles";

const Input = ({leftIcon, name, control, errorMensage ,...rest}) => {
    return (
        <>
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>): null}
            <Controller 
            name={name}
            control={control}
            rules={{required: true }}
            render={({ field }) => <InputText {...field} {...rest} />}
            />
            
        </InputContainer>
        {errorMensage ? <ErrorText>{errorMensage}</ErrorText>: null}
        </>
    );
};

export default Input;