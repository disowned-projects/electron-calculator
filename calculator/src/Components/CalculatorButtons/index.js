import React from 'react'
import styled from 'styled-components'

const ButtonsBackground = styled.div`
    height: 100%
    padding: 0
    margin: 0
`

const Button = styled.button`
    background-color: rgba(250, 250, 250, 0.5);
    height: 52.5px;
    width: 62.5px;
    margin: 0;
    padding: 0;
    border: 1px solid gray;
    color: white;
    font-size: 20px;

    &:focus {
        color: black;
        outline: none;
    }
`
const ZeroButton = styled(Button)`
    width: 125px
    border-bottom: none
`
const BottomButton = styled(Button)`
    border-bottom: none
`
const TopButton = styled(Button)`
    border-top: none
`
const OperatorButton = styled(Button)`
    background-color: rgba(0, 250, 250, 0.5)
    border-right: none
    border-color: rgba(0, 250, 250, 0.1)
`
const OperatorButtonBottom = styled(OperatorButton)`
    border-bottom: none
`
const OperatorButtonTop = styled(OperatorButton)`
    border-top: none
`

export default ({ clickButton }) => (
    <ButtonsBackground>
        <TopButton 
            onClick={() => clickButton('C')}
            onDoubleClick={() => clickButton('CC')}
        >
            C
        </TopButton>
        <TopButton onClick={() => clickButton('+/-')}>+/-</TopButton>
        <TopButton onClick={() => clickButton('%')}>%</TopButton>
        <OperatorButtonTop onClick={() => clickButton('/')}>
            /
        </OperatorButtonTop>
        <Button onClick={() => clickButton('1')}>1</Button>
        <Button onClick={() => clickButton('2')}>2</Button>
        <Button onClick={() => clickButton('3')}>3</Button>
        <OperatorButton onClick={() => clickButton('x')}>x</OperatorButton>
        <Button onClick={() => clickButton('4')}>4</Button>
        <Button onClick={() => clickButton('5')}>5</Button>
        <Button onClick={() => clickButton('6')}>6</Button>
        <OperatorButton onClick={() => clickButton('-')}>-</OperatorButton>
        <Button onClick={() => clickButton('7')}>7</Button>
        <Button onClick={() => clickButton('8')}>8</Button>
        <Button onClick={() => clickButton('9')}>9</Button>
        <OperatorButton onClick={() => clickButton('+')}>+</OperatorButton>
        <ZeroButton onClick={() => clickButton('0')}>0</ZeroButton>
        <BottomButton onClick={() => clickButton('.')}>.</BottomButton>
        <OperatorButtonBottom onClick={() => clickButton('=')}>
            =
        </OperatorButtonBottom>
    </ButtonsBackground>
)
