import styled from 'styled-components'


const ShowQRCodeDiv = styled.div`
    .shade {
        background: rgba(0,0,0,.3);
        height: 100vh;
        width: 100vw;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .qr {
        margin-bottom: 150px;
        padding-bottom: 20px;
        background: #fff;
        text-align: center;
        .qrImg {
            width: 300px;
        }
    }
    
`

export default ShowQRCodeDiv