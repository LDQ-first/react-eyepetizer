import styled from 'styled-components'

const LoadingDiv = styled.div`
    display: inline-block;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading {
        height: 100px;
    }
    span {
        display: inline-block;
        width: 8px;
        height: 50%;
        border-radius: 4px;
        margin: 0 10px;
        background: lightgreen;
        animation: load 1s ease infinite;
    }
    @keyframes load {
        0%, 100% {
            height: 40px;
            background: lightgreen;
        }
        50% {
            height: 70px;
            margin: -15px 0;
            background: lightblue;
        }
    }
    span:nth-child(2) {
        animation-delay: 0.2s;
    }
    span:nth-child(3) {
        animation-delay: 0.4s;
    }
    span:nth-child(4) {
        animation-delay: 0.6s;
    }
    span:nth-child(5) {
        animation-delay: 0.8s;
    }
`

const ProgressDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`



export default LoadingDiv

export {
    ProgressDiv
}