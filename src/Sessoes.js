import styled from 'styled-components'
import axios from 'axios'
import {useState} from 'react'
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom";

export default function Sessoes(props){

	const [objFilme, setObj] = useState({});
	const [listaHorarios, setList] = useState([]);

	const idFilme = useParams().idFilme;

	const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

	promise.then(setObjAndList);

	function setObjAndList(resposta){
		setObj(resposta.data);
		setList(resposta.data.days);
	}

	return(<>
		<Sele>
			<div>
				Selecione o horário
			</div>
		</Sele>
		<Dias>
			{listaHorarios.map((e, i)=>
				<Dia key={i}>
					{e.weekday} - {e.date}
					<Horarios>
						{e.showtimes.map((elem, ind)=>
								<Link to={`/assentos/${idFilme}`}>
									<div key={ind}>
										{elem.name}
									</div>
								</Link>
							
						)}
					</Horarios>
				</Dia>
			)}
		</Dias>
		<Footer>
			<Moldura>
				<img src={objFilme.posterURL}/>
			</Moldura>
			<div>
				{objFilme.title}
			</div>
		</Footer>
	</>)
}
const Moldura = styled.div`
	box-shadow: 0px 4px 6px 2px #0000001A;
	background: #FFFFFF;
	border-radius: 2px;
	padding: 8px;
	box-sizing: border-box;
`

const Footer = styled.div`
	display: flex;
	align-items: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 117px;
	border: 1px solid #9EADBA;
	background: #DFE6ED;
	img{
		height: 72px;
		width: 48px;
	}
	div{
		font-family: Roboto;
		font-size: 26px;
		font-weight: 400;
		line-height: 30px;
		letter-spacing: 0em;
		text-align: left;
		color: #293845;
		margin-left: 14px;
	}
`

const Sele = styled.div`
	font-family: Roboto;
	font-size: 24px;
	font-weight: 400;
	line-height: 28px;
	letter-spacing: 0.04em;
	text-align: center;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 110px;
	width: 100%;
`

const Dias = styled.div`
	font-family: Roboto;
	font-size: 20px;
	font-weight: 400;
	line-height: 23px;
	letter-spacing: 0.02em;
	text-align: left;
	margin-left: 24px;
`

const Dia = styled.div`

`

const Horarios = styled.div`
	display: flex;
	div{
		height: 43px;
		width: 83px;
		left: 23px;
		top: 227px;
		border-radius: 3px;
		background: #E8833A;
		margin-right: 8px;
		margin-bottom: 25px;
		margin-top: 25px;
		display: flex;
		align-items: center;
		justify-content: center;

		transition: .2s;
		&:hover{
			transform: scale(1.07);
			transition: .2s;
			cursor: pointer;
		}
	}
	a{
			color: white;
			text-decoration: none;
		}
`