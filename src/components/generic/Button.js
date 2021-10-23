import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BaseButton = styled.button`
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 30px;
    font-weight: 700;
`;

const ButtonPrimary = styled(BaseButton)`
    background-color: #45D3AD;

    :hover {
        background-color: #419786;
    }
`;

const ButtonSecondary = styled(BaseButton)`
    background-color: #E16BBD;

    :hover {
        background-color: #B64995;
    }
`;

const ButtonDanger = styled(BaseButton)`
    background-color: #D34545;

    :hover {
        background-color: #A42323;
    }

`;

class Button extends React.Component {
    render() {
        const { children, variant, ...passProps } = this.props;

        switch(variant) {
            case "secondary":
                return (
                    <ButtonSecondary {...{ passProps }}>{children}</ButtonSecondary>
                );
            case "danger": 
                return (
                    <ButtonDanger {...{ passProps }}>{children}</ButtonDanger>
                );
            case "primary":
            default: 
                return (
                    <ButtonPrimary {...{ passProps }}>{children}</ButtonPrimary>
                );
        }
    }
}
Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
Button.defaultProps = {
    type: "button",
    disabled: false,
    variant: "primary",
    children: "Click me"
}

export default Button;
