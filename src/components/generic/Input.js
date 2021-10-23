import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const HiddenLabel = styled.label`display:none;`;

const StyledInput = styled.input`
    background-color: #ffffff;
    border: none;
    width: 40px;
    padding: 5px;

    ::placeholder {
        color: #459Fd3;
        font-size: 20px;
    }
`;

class Input extends React.Component {
  render() {
    const { type, name, onChange, disabled, placeholder, value } = this.props;
    return (
        <React.Fragment>
            <HiddenLabel {...{ name }} ></HiddenLabel>
            <StyledInput {...{ name, type, onChange, disabled, placeholder, value }} />
        </React.Fragment>
    );
  }
}
Input.propTypes = {
    type: PropTypes.oneOf(["text", "number", "submit"]),
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}
Input.defaultProps = {
    type: "text",
    disabled: false,
    value: "",
    placeholder: "Enter text here..."
}

export default Input;
