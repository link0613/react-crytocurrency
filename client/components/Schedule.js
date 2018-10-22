import React from 'react'
import { connect } from 'react-redux'
import { closeIframe, getUser } from '../store'
import history from '../history'
// import {Link} from 'react-router-dom'
// import { Row, Col } from 'react-bootstrap'

class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <div id="iframe-modal">
                <div id="schedule-form">
                    <iframe src="https://calendly.com/panda-bill/panda-pow-index-fund-info" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
                    <div className="exit-btn" onClick={this.props.closeIframe}>X</div>
                </div>
            </div>
        )
    }
}

const mapState = state => ({})
const mapDispatch = dispatch => {
    return {
        closeIframe: () => dispatch(closeIframe())
    }
}

export default connect(mapState, mapDispatch)(Registration)
