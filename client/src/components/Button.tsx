import type React from "react";
import { styled } from "styled-components";

type ButtonIntent = "none" | "primary" | "secondary" | "danger";

const StyledButton = styled.button<{ $intent?: ButtonIntent; $rounded?: boolean }>`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 20px;
    height: 25px;
    padding-inline: 2px;

    background-color: ${(props) =>
        props.$intent === "primary"
            ? props.theme.colors.grass9
            : props.$intent === "secondary"
              ? props.theme.colors.blue8
              : props.$intent === "danger"
                ? props.theme.colors.red9
                : props.theme.colors.olive9};
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive11};
    border-radius: ${(props) => (props.$rounded ? "50%" : "0%")};

    color: #fff;
    cursor: pointer;

    &:disabled {
        color: ${(props) => props.theme.colors.olive9};
        background-color: ${(props) => props.theme.colors.olive3};
        cursor: not-allowed;
    }
`;

type ButtonProps = {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    intent?: ButtonIntent;
    rounded?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton
            type={props.type ?? "button"}
            $intent={props.intent}
            $rounded={props.rounded}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </StyledButton>
    );
};
