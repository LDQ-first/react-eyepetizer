import styled from 'styled-components'


const ShowQRCodeDiv = styled.div`
    .shade {
        background: rgba(0,0,0,.3);
        height: 100vh;
        width: 100vw;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .qr {
        margin-bottom: 120px;
        padding-bottom: 20px;
        background: #fff;
        text-align: center;
        animation: showQR 1s ease-in-out;
        @keyframes showQR {
            0% {
                opacity: 0;
                transform: translateY(30%);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .qrImg {
            width: 300px;
        }
    }
    
`

export default ShowQRCodeDiv