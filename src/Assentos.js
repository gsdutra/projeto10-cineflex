import styled from 'styled-components'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, useParams, useNavigate} from "react-router-dom";


export default function Assentos(props){

    const [objFilme, setObj] = useState(undefined);

    const [selecionados, setSelecionados] = useState([]);

    const [numAssentos, setNumAssentos] = useState([]);

    const [nome, setNome] = useState("");

    const [CPF, setCPF] = useState("");

	const idFilme = useParams().idSessao;

    const nav = useNavigate();

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idFilme}/seats`);

        promise.then(setObjAndList);

        function setObjAndList(resposta){
            setObj(resposta.data);
        }
    },[]);

    function addAssento(assento, disponibilidade, nomeNum){
        if (disponibilidade === true){
            if (selecionados.includes(assento)){
                const newArr = [...selecionados];
                newArr.pop();
                setSelecionados(newArr);
            }else{
                const newArr = [...selecionados, assento];
                setSelecionados(newArr);
                setNumAssentos(nomeNum);
            }
        }
        else{
            alert("Assento indisponível");
        }
    }

    function reservar(event){
        event.preventDefault();
        if (selecionados.length > 0){
            const req = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
            {
                ids: [...selecionados],
                name: nome,
                cpf: CPF
            }
            );

            props.setDados({
                nomeFilme: objFilme.movie.title,
                diaFilme: objFilme.day.date,
                horaFilme: objFilme.name,
                assentos: [...numAssentos],
                nomeComprador: nome,
                CPF: CPF
            });
            
            req.then((r)=>nav('/sucesso'));
        }
    }

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
                    <Assento key={e.id} disponibilidade={e.isAvailable}
                    selecionado={selecionados.includes(e.id)?true:false}
                    onClick={()=>addAssento(e.id, e.isAvailable, e.name)}
                    data-test="seat">
                        <div>
                            {e.name}
                        </div>
                    </Assento>
            )}
            </AssentosShow>

        </Center>

        <Legenda>
            <div><Assento disponibilidade={true} selecionado={true}>
                </Assento><a>Selecionado</a></div>
            <div><Assento disponibilidade={true} selecionado={false}>
                </Assento><a>Disponível</a></div>
            <div><Assento disponibilidade={false} selecionado={false}>
                </Assento><a>indisponível</a></div>
        </Legenda>

        <Form>
            <form onSubmit={reservar}>
                <div>Nome do comprador:</div>
                <input required type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder={"Digite seu nome..."} data-test="client-name"/>

                <div>CPF do comprador:</div>
                <input required type="text" value={CPF} onChange={e => setCPF(e.target.value)} placeholder={"Digite seu CPF..."} data-test="client-cpf"/>

                    <button type="submit" data-test="book-seat-btn">
                        Reservar assento(s)
                    </button>
            </form>
        </Form>
        <Footer data-test="footer">
			<Moldura>
				<img src={objFilme === undefined?
                    null:
                    objFilme.movie.posterURL
                    }/>
			</Moldura>
			<div>
				{objFilme === undefined? null:
                objFilme.movie.title}
                <br/> 
                {objFilme === undefined? null:objFilme.day.weekday} - {objFilme === undefined? null:objFilme.name}
			</div>
		</Footer>
    </>)
}

const Form = styled.div`
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    div{
        width: 327px;
        margin-top: 10px;
    }
    input{
        margin-top: 5px;

        font-family: Roboto;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;

        border: 1px solid #D4D4D4;
        height: 51px;
        width: 327px;
        border-radius: 3px;
    }

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
}
`

const Legenda = styled.div`
    width: 100%;
    display: flex;
	align-items: center;
	justify-content: center;
    div{
        display: flex;
        flex-direction: column;
        margin: 20px;
        align-items: center;
	    justify-content: center;
    }
    a{
        font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: -0.013em;
        text-align: center;
        color: #4E5A65;
    }
`

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
    justify-content: center;
    max-width: 390px;
`
const Assento = styled.div`
    background: ${props=>props.selecionado? "#1AAE9E":
    (props.disponibilidade?"#C3CFD9":"#FBE192")
    };
    border: 1px solid ${props=>props.selecionado? "#0E7D71":
    props.disponibilidade?"#808F9D":"#F7C52B"
    };
    margin: 4px;
    margin-top: 9px;
    margin-bottom: 9px;

    height: 26px;
    width: 26px;
    left: 91px;
    top: 158px;
    border-radius: 12px;
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
