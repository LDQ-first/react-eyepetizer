import React, { Component } from 'react'
import GoToTopDiv from '../../styled/GoToTop.js'
import RaisedButton from 'material-ui/RaisedButton'
import DeviceAirplanemodeActive from 'material-ui/svg-icons/device/airplanemode-active'



export default class GoToTop extends Component {

    _gotoTop () {
        const timer = setInterval(() => {
            if(document.body.scrollTop < 200) {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                clearInterval(timer)
            }
            else {
                document.body.scrollTop -=  document.body.scrollTop * 0.2
                document.documentElement.scrollTop -= document.documentElement.scrollTop * 0.2
            }
        }, 100)
    }

    render() {
        return (
            <GoToTopDiv onClick={() => {this._gotoTop()}}>
                <button className="btn">
                    <DeviceAirplanemodeActive />
                </button>
            </GoToTopDiv>
        )
    }
}
