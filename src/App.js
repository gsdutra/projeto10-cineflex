import Header from './Header.js'
import Main from './Main.js'
import Sessoes from './Sessoes.js'
import Assentos from './Assentos.js'
import Sucessos from './Sucesso.js'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sucesso from './Sucesso.js'
import {useState, useEffect} from 'react'
function App() {

	const [confirmarFilme, setConfirmar] = useState({nome: 2});
	useEffect(() => setConfirmar({}),[]);

	return (<>
		<Header/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main/>}/>
					<Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
					<Route path="/assentos/:idSessao" element={<Assentos setDados={setConfirmar}/>}/>
					<Route path="/sucesso" element={<Sucesso dados={confirmarFilme}/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

