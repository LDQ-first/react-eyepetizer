import styled from 'styled-components'
import {mediaQuery} from './index.js'
import {eyeApi} from '../api/api.js' 

const AuthorDiv = styled.div`
     color: #FFF;
     padding: 2em;
     ${mediaQuery(768)}  {
         padding: 1em;
     }

`

export default AuthorDiv