import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageBackgroundPane = styled.div`
    background: linear-gradient(120deg,rgba(143,229,255,0.9),rgba(0,20,168,0.78)),url("/maarten-van-den-heuvel-unsplash-sm.jpg");
    height: 390px;
    width: 550px;
    border-radius: 0 20px 20px 0;
    padding: 15px 20px 5px 20px;
    background-position: center;
    background-size: cover;
`;

const InnerPane = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    flex-shrink: 0;
    border-radius: 20px;
    border: 4px dotted #FFFFFF;
    height: 380px;
    width: 100%;
    color: #ffffff;
    padding: 30px 60px;
`;


class Panel extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <ImageBackgroundPane>
                <InnerPane>
                { children }
                </InnerPane>  
            </ImageBackgroundPane>
        );
    }
    
}

export default Panel;