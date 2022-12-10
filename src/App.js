import Header from './Header.js'
import Main from './Main.js'
import Sessoes from './Sessoes.js'
import Assentos from './Assentos.js'
import Sucessos from './Sucesso.js'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sucesso from './Sucesso.js'
function App() {
	return (<>
		<Header/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main/>}/>
					<Route path="/sessoes" element={<Sessoes/>}/>
					<Route path="/assentos" element={<Assentos/>}/>
					<Route path="/sucesso" element={<Sucesso/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

