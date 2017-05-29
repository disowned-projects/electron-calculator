import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Calculator from 'Components/Calculator'

const Background = styled.div`
    width: 250px;
    height: 350px;
`

ReactDOM.render(
    <Background>
        <Calculator />
    </Background>,
    document.getElementById('root'),
)
