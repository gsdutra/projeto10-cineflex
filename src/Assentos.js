import styled from 'styled-components'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, useParams} from "react-router-dom";


export default function Assentos(props){

    const [objFilme, setObj] = useState(undefined);
    //const [listaAssentos, setList] = useState([]);

	const idFilme = useParams().idSessao;

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idFilme}/seats`);

        promise.then(setObjAndList);

        function setObjAndList(resposta){
            setObj(resposta.data);
            //setList(resposta.data.seats);
        }
    },[]);

    return(<>
        <Sele>
			<div>
				Selecione o(s) assento(s)
			</div>
		</Sele>
        <Center>
            <AssentosShow>
                {objFilme === undefined? "Carregando...":
                objFilme.seats.map((e, i) =>
                    <Assento key={e.id}>
                        <div>
                            {e.name}
                        </div>
                    </Assento>
            )}
            </AssentosShow>
        </Center>
        <Footer>
			<Moldura>
				<img src={objFilme === undefined?
                    null:
                    objFilme.movie.posterURL
                    }/>
			</Moldura>
			<div>
				{objFilme === undefined? null:
                objFilme.movie.title}
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

const AssentosShow = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 390px;
`
const Assento = styled.div`
    margin: 4px;
    margin-bottom: 18px;

    height: 26px;
    width: 26px;
    left: 91px;
    top: 158px;
    border-radius: 12px;
    border: 1px solid #808F9D;
    background: #C3CFD9;
    color: #000000;
    display: flex;
	align-items: center;
	justify-content: center;

    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-align: center;

    transition: .2s;
		&:hover{
			transform: scale(1.07);
			transition: .2s;
			cursor: pointer;
		}

`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
