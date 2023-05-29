import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './theme'
import Form from './components/Form'

const Container = styled.div`
	height: 100vh;
	background-image: linear-gradient(to bottom, #5531f2, #391ea1);
	display: flex;
	align-items: center;
	justify-content: center;
`

function App() {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Form />
			</Container>
		</>
	)
}

export default App
