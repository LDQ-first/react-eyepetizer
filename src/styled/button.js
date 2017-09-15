import styled from 'styled-components'
import Button from 'material-ui/Button'



const Buttons = styled(Button)`
    &.btn {
        color: #fff;
        overflow: hidden;
        background: #7e57c2;
        border-radius: 2px;
        height: 36px;
        line-height: 36px;
        padding: 0;
        min-width: 88px;
        box-shadow: 0 1px 6px rgba(0,0,0,.4),
                    0 1px 4px rgba(0,0,0,.2);
        margin: 10px;
        padding: 0 10px;
        &:hover {
            background: #7e57c2;
        }
    }
`

export default Buttons