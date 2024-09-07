import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import styled from "styled-components";

import { Button } from "../Button";
import { Input } from "./Input";

const FormStyled = styled.form`
    display: flex;
    gap: 0.5rem;
    width: 100%;
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    return (
        <FormStyled
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputValue);
            }}
            onReset={() => {
                onCancel();
            }}
        >
            <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <Button type="reset">
                <Cross1Icon />
            </Button>
            <Button type="submit" intent="primary" disabled={inputValue === ""}>
                <CheckIcon />
            </Button>
        </FormStyled>
    );
};
