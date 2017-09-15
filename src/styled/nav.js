import styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import { red, deepOrange } from 'material-ui/colors'
const navRed = red[400]
const navOrange = deepOrange[200]

export default styled.nav`
    padding: 1em;
   /* background: linear-gradient(20deg, rgb(219,112,147), #daa357);*/
    background: linear-gradient(20deg, ${navRed}, ${navOrange});
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    height: 100%;
    overflow: auto;
    color: #FBFBFB;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .control {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    a {
        color: #FBFBFB;
        display: inline-block;
        width: 100%;
        padding: 0 16px;
    }
    .logo {
        display: inline-block;
        min-width: 50px;
        height: 30px;
        padding: 0;
        img {
            width: 30px;
            height: 30px;
        }
    }
    .menu-svg {
        height: 30px;
        width: 30px;
        display: none;
        img {
            width: 30px;
            height: 30px;
        }
    }
    .menu-list {
        width: 100%;
        .menu-item {
            padding-left: 4px;
            padding-right: 4px;
        }
    }
    
    @media (max-width: 50em) {
        width: 100%;
        height: auto;
        padding: 0.5em;
        .menu-list {
           height: ${props => props.open ? 'calc(100vh - 66px)' : '0'};
           padding: ${props => props.open ? '10px' : '0'};
           overflow: ${props => props.open ? 'auto' : 'hidden'};
           transition: all 0.6s ease-in-out;
           z-index: 10;
        }
        .menu-svg {
            display: inline-block;
            float: right;
            cursor: pointer;
        }
    }
`