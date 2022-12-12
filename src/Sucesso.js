import styled from 'styled-components'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, useParams, useNavigate} from "react-router-dom";

export default function Sucesso(props){

	console.log(props.dados);

	return(<>
		<div data-test="movie-info">
			<Pedido>Pedido feito<br/>com sucesso!</Pedido>
			<Stron>
				Filme e sessão
			</Stron>
			<Normal>
				{props.dados.nomeFilme}<br/>
				{props.dados.diaFilme} {props.dados.horaFilme}
			</Normal>
		</div>
		<div data-test="seats-info">
			<Stron>
				Ingressos
			</Stron>
			<Normal>
				{props.dados.assentos.map((e)=>
				(<div>Assento {e}</div>)
				)}
			</Normal>
		</div>
		<div data-test="client-info">
			<Stron>
				Comprador
			</Stron>
			<Normal>
				<div>Nome: {props.dados.nomeComprador}</div>
				<div>Nome: {props.dados.CPF}</div>
			</Normal>
		</div>
		<Botao>
			<Link to={"/"}><button data-test="go-gome-btn">Voltar para Home</button></Link>
		</Botao>
	</>)
}
const Botao = styled.div`
	button{
		height: 42px;
		width: 225px;
		left: 72px;
		top: 688px;
		border-radius: 3px;
		background: #E8833A;
		color: white;
		border: none;
		margin-top: 57px;
		margin-bottom: 200px;
		font-family: Roboto;
		font-size: 18px;
		font-weight: 400;
		
		transition: .2s;
		&:hover{
			transform: scale(1.03);
			transition: .2s;
			cursor: pointer;
		}
	}
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

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

const Normal = styled.div`
	font-family: Roboto;
	font-size: 22px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0.04em;
	text-align: left;
	color: #293845;
	margin-left: 28px;
	margin-top: 5px;
	margin-bottom: 30px;
`

const Stron = styled.div`
	font-family: Roboto;
	font-size: 24px;
	font-weight: 700;
	line-height: 28px;
	letter-spacing: 0.04em;
	text-align: left;
	color: #293845;
	margin-left: 28px;
`