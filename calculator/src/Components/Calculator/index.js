import React from 'react'
import styled from 'styled-components'

import DisplayBar from 'Components/DisplayBar'
import CalculatorButtons from 'Components/CalculatorButtons'

const Background = styled.div`
    background-color: rgba(0,0,0,0.5);
    box-shadow: 2px 2px 3px black
    top: 0px;
    left: 0;
    height: 100%;
    width: 100%;
`

class Calculator extends React.Component {
    constructor () {
        super()
        this.state = {
            currentValue: '',
            previousValue: '',
        }
    }
    clickButton = async (value) => {
        const numbers = /^[\d.]$/
        if (numbers.test(value)){
            if (this.state.currentValue === '0') this.setState({
                currentValue: ''
            })
            this.setState(state => ({
                currentValue: state.currentValue += value
            }))
            return
        }
        const operatars = /^[+-/x]$/
        if (operatars.test(value)){
            let {currentValue} = this.state
            if (operatars.test(''+currentValue[currentValue.length - 2])) {
                currentValue = currentValue.slice(0, currentValue.length - 2)
            } else {
                await this.calculate()
                currentValue = this.state.currentValue
            }
            currentValue += ' ' + value + ' '
            this.setState({
                currentValue
            })
            return
        }
        if (value === 'C' || value === 'CC') return this.clear(value)
        if (value === '+/-') return this.toggleNegation()
        if (value === '%') return this.calculatePercent()
        if (value === '=') return this.calculate()
    }
    calculate = () => new Promise(resolve => {
        let {currentValue} = this.state
        currentValue = '' + currentValue
        this.setState(state => ({
            previousValue: currentValue,
            currentValue: (eval(currentValue.replace(/x/g, '*'))).toFixed(2) / 1
        }),resolve)
    })
    clear = (value) => {
        value === 'CC'
            ? this.setState(state => ({ currentValue: '0' }))
            : this.setState(state => {
                let {currentValue} = state
                currentValue = '' + currentValue
                const operatars = /^[+-/x][^.]$/
                let {length} = currentValue
                if (operatars.test(currentValue[currentValue.length - 2])) {
                    currentValue = currentValue.slice(0, length - 3)
                    return {currentValue}
                }
                currentValue = currentValue.slice(0, currentValue.length - 1)
                return {currentValue}
            })
    }
    toggleNegation = () => {
        let {currentValue} = this.state
        currentValue = ''+currentValue
        let numbers = currentValue.split(' ')
        let lastNumber = numbers[numbers.length - 1]
        if (lastNumber[0] === '-') {
            lastNumber = lastNumber.slice(1)
            numbers[numbers.length - 1] = lastNumber
        } else if (/[\d.]/.test(lastNumber)){
            lastNumber = '-' + lastNumber
            numbers[numbers.length - 1] = lastNumber
        }
        this.setState(state => ({
            currentValue: numbers.join(' ')
        }))
    }
    calculatePercent = () => {
        let {currentValue} = this.state
        currentValue = '' + currentValue
        currentValue = currentValue.replace(/x/g, '*')
        if (isNaN(+currentValue)) currentValue = eval(currentValue)
        if (isNaN(+currentValue)) return
        this.setState(state => ({
            currentValue: currentValue && (+currentValue / 100).toFixed(2)
        }))
    }
    render () {
        let {
            currentValue,
            previousValue
        } = this.state
        return (
            <Background>
                <DisplayBar 
                    previousValue={previousValue}
                    currentValue={currentValue}
                />
                <CalculatorButtons 
                    clickButton={this.clickButton}
                />
            </Background>
        )
    }
}

export default Calculator

/* eslint no-eval: off */