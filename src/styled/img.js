import styled from 'styled-components'

const Img = styled.img`
    width: 100px;
    height: 100px;
    display: ${props => props.show ? 'inline-block':'none' }
`

module.exports = Img
