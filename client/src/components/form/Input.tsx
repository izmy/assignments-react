import styled from "styled-components";

const InputStyled = styled.input<{ $isHighlighted?: boolean }>`
    flex: 1;

    background-color: ${(props) => (props.$isHighlighted ? props.theme.colors.red4 : "white")};
`;

type InputProps = {
    value: string;
    isHighlighted?: boolean;
    onValueChange: (value: string) => void;
};

export const Input = (props: InputProps) => {
    const { value, onValueChange } = props;

    return (
        <InputStyled
            autoFocus
            placeholder="Type here..."
            value={value}
            $isHighlighted={props.isHighlighted}
            onChange={(e) => {
                const value = e.currentTarget.value;
                onValueChange(value);
            }}
        />
    );
};
