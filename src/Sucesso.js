import styled from 'styled-components'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, useParams, useNavigate} from "react-router-dom";

export default function Sucesso(props){
    return(<>
        <Pedido>Pedido feito<br/>com sucesso!</Pedido>
        <Stron>
            Filme e sessão
        </Stron>
        <Normal>

        </Normal>
        <Stron>
            Ingressos
        </Stron>
        <Normal>

        </Normal>
        <Stron>
            Comprador
        </Stron>
        <Normal>

        </Normal>
    </>)
}

const Pedido = styled.div`
    color: #247A6B;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
    margin: 30px;
`

const Normal = styled.div``

const Stron = styled.div``