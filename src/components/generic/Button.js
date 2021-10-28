import React from "react";
import styled from "styled-components";

import { globalPropTypes } from "../../utils/globalPropTypes";
import { themeColors } from "../../utils/tokensAndTheme";

const BaseButton = styled.button`
    color: ${themeColors.textLight};
    border: none;
    padding: 10px 20px;
    font-size: 30px;
    font-weight: 700;
`;

const ButtonPrimary = styled(BaseButton)`
    background-color: ${themeColors.btnPrimary};
    :hover {
        background-color: ${themeColors.btnPrimaryHover};
    }
`;

const ButtonSecondary = styled(BaseButton)`
    background-color: ${themeColors.btnSecondary};
    :hover {
        background-color: ${themeColors.btnSecondaryHover};
    }
`;

const ButtonDanger = styled(BaseButton)`
    background-color: ${themeColors.btnDanger};
    :hover {
        background-color: ${themeColors.btnDangerHover};
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
    variant: globalPropTypes.variant,
    type: globalPropTypes.buttonType,
    disabled: globalPropTypes.disabled,
    children: globalPropTypes.children,
    onClick: globalPropTypes.onClick.isRequired,
}
Button.defaultProps = {
    type: "button",
    disabled: false,
    variant: "primary",
    children: "Click me"
}

export default Button;
