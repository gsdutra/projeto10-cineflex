import styled from "styled-components"
import React from 'react';

export default function Header(props){
    return(<>
        <HeaderStyled>
            <div>
                CINEFLEX
            </div>
        </HeaderStyled>
    </>)
}

const HeaderStyled = styled.div`
    height: 67px;
    width: 100%;
    background-color: #C3CFD9;
    color: #E8833A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;

`