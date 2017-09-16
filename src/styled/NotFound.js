import styled from 'styled-components'
const bg1Url = process.env.NODE_ENV === 'production' 
    ? '/react-eyepetizer/dist/static/img/bg1.jpg'
    : '../../static/img/bg1.jpg'

const bg2Url =  process.env.NODE_ENV === 'production' 
    ? '/react-eyepetizer/dist/static/img/bg2.jpg'
    : '../../static/img/bg2.jpg'



const NotFoundDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh);
    background: url(${bg1Url}) no-repeat center / cover;
    background-attachment: fixed;
    @media (max-width: 50em) {
        background: url(${bg2Url}) no-repeat center / cover;
    }
    .title {
       height: 1.6em;
       font-size: 20rem;
       color: #E6467F;
       text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9,
                    0 3px 0 #bbb, 0 4px 0 #b9b9b9,
                    0 5px 0 #aaa,
                    0 6px 1px rgba(0,0,0,0.1),
                    0 0 5px rgba(0,0,0,0.1),
                    0 1px 3px rgba(0,0,0,0.3),
                    0 3px 5px rgba(0,0,0,0.2),
                    0 5px 10px rgba(0,0,0,0.25);
        @media (max-width: 50em) {
            font-size: 12rem;
        }
    }
`



export default NotFoundDiv
