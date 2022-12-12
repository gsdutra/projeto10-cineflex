import styled from 'styled-components'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function Main(props){
    const [listaFilmes, setList] = useState(undefined);

    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');

        promise.then((resposta)=>setList(resposta.data));
    }, []);

    return(<>
        <Sele>
            <div>
                Selecione o filme
            </div>
        </Sele>
        <MostraFilmes>
            {listaFilmes === undefined? "Carregando...":
            listaFilmes.map((e, i)=>(
                <PosterFilme key={i}>
                    <Link to={`/sessoes/${e.id}`}>
                        <Moldura data-test="movie">
                            <img src={e.posterURL}/>
                        </Moldura>
                    </Link>
                </PosterFilme>
            ))}
        </MostraFilmes>
    </>)
}

const Moldura = styled.div`
	box-shadow: 0px 4px 6px 2px #0000001A;
	background: #FFFFFF;
	border-radius: 2px;
	padding: 8px;
	box-sizing: border-box;
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

const MostraFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    color: #343434;

`

const PosterFilme = styled.div`
    width: 129px;
    height: 193px;
    margin: 23px;
    transition: .2s;
    img{
        width: 129px;
        height: 193px;
    }
    &:hover{
        transform: scale(1.04);
        transition: .2s;
        cursor: pointer;
    }
`