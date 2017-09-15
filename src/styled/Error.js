import styled from 'styled-components'
import { teal} from 'material-ui/colors'
const msgTeal = teal[500]

const ErrorDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(50vh);
    padding: 1em;
    .msg {
       font-size: 5rem;
       letter-spacing: 8px;
       color: ${msgTeal};
       text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9,
                    0 3px 0 #bbb, 0 4px 0 #b9b9b9,
                    0 5px 0 #aaa,
                    0 6px 1px rgba(0,0,0,0.1),
                    0 0 5px rgba(0,0,0,0.1),
                    0 1px 3px rgba(0,0,0,0.3),
                    0 3px 5px rgba(0,0,0,0.2),
                    0 5px 10px rgba(0,0,0,0.25);
        @media (max-width: 50em) {
            font-size: 4rem;
        }@media (max-width: 370px) {
            letter-spacing: 4px;
        }
        @media (max-width: 340px) {
            letter-spacing: 0px;
        }
    }
`

export default ErrorDiv