import styled from 'styled-components'


const TopScreenDiv = styled.div`
    .menu {
        button {
            height: 36px;
            margin: 0 8px;
            transition: opacity .6s;
            opacity: .7;
            padding: 0;
            width: 36px;
        }
        .email, .wechat, .weibo {
            background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/sprite_share.bc0f4494.png);
            background-repeat: no-repeat;
        }
        .wechat {
            background-size: 36px;
            background-position: 0 -26px;
        }
    }


`

export default TopScreenDiv