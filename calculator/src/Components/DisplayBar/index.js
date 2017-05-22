import React from 'react'
import styled from 'styled-components'

const Display = styled.div`
    -webkit-app-region: drag
    color: red
    width: 100%
    text-align: right
    padding: 5px
    margin: 0
    height: 70px
    padding-top: 10px
    font-family: 'Arial'
`

const Current = styled.p`
    color: rgba(0, 250, 250, 0.5)
    padding: 0
    margin: 0
    padding-right: 20px
    font-size: 44px
`
const Previous = styled.p`
    color: rgba(250, 250, 250, 0.5)
    padding: 0
    margin: 0
    padding-right: 25px
`

export default ({currentValue, previousValue}) => (
    <Display>
        <Previous>{previousValue || 0}</Previous>
        <Current>{currentValue || 0}</Current>
    </Display>
)