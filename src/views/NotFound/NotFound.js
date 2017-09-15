import React, { Component } from 'react'
import {Container} from '../../styled'
import NotFoundDiv from '../../styled/NotFound'

export default class NotFound extends Component {
    render() {
        return (
            <Container className="noPadding">
               <NotFoundDiv>
                   <h1 className="title">404</h1>
               </NotFoundDiv>
            </Container>
        )
    }
}
