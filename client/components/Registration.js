import React from 'react'
import { connect } from 'react-redux'
import { closeModal, getUser } from '../store'
import history from '../history'
// import {Link} from 'react-router-dom'
// import { Row, Col } from 'react-bootstrap'

class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {signup: true, payment: false}
        this.goToPayment = this.goToPayment.bind(this)
        this.goBackToSignup = this.goBackToSignup.bind(this)
        this.login = this.login.bind(this)
    }

    goToPayment() {
        this.setState({payment: true})
    }

    goBackToSignup() {
        this.setState({payment: false})
    }

    login(){
        this.props.getUser("John")
        this.props.closeModal()
        history.push(`/dashboard`)
    }

    render() {

        return (
            <div id="registration-modal">
                {
                    !this.state.payment &&
                    <div id="signup-form">
                        <div className="btn-container">
                            <button className={this.state.signup ? "signup-tab" : "signup-tab-inactive"} type="submit" onClick={() => this.setState({signup: true})}>Sign Up</button>
                            <button className={this.state.signup ? "signup-tab-inactive" : "signup-tab"} type="submit" onClick={() => this.setState({signup: false})}>Log In</button>
                        </div>
                            {
                                this.state.signup ?
                                <div className="input-container">
                                    <p>You'll be able to execute tradings after you create your account</p>
                                    <input type="text" value="" placeholder="First Name" />
                                    <input type="text" value="" placeholder="Last Name" />
                                    <input type="text" value="" placeholder="Email" />
                                    <input type="text" value="" placeholder="Password" />
                                    <input type="text" value="" placeholder="Password Confirmation" />
                                    <p className="disclaimer">*By signing up you agree to our Terms and Conditions</p>
                                    {/*<p className="skip" onClick={this.props.closeModal}>Skip for now.</p>*/}
                                    <button type="submit" className="start-btn" onClick={this.goToPayment}>SIGN UP</button>
                                    <button type="submit" className="google-btn"><img src="./assets/google-logo.png" />SIGN IN WITH GOOGLE</button>
                                </div>
                                :
                                <div className="input-container">
                                    <p>Welcome Back</p>
                                    <input type="text" value="" placeholder="Username" />
                                    <input type="text" value="" placeholder="Password" />
                                    {/*<p className="skip" onClick={this.props.closeModal}><img src="./assets/arrow_back.svg" />Go back.</p>*/}
                                    <button type="submit" className="start-btn" onClick={this.props.getUser}>LOG IN</button>
                                </div>
                            }
                        <div className="exit-btn" onClick={this.props.closeModal}>X</div>
                    </div>
                }

                {
                    this.state.payment &&
                    <div id="payment-form">
                        <h5>Welcome to Panda Analytics</h5>
                        <h6>Please add a payment method</h6>
                        <div className="cc-container">
                            <div>
                                <p>Billing Address</p>
                                <div className="input-container">
                                    <input type="text" value="" placeholder="First Name" />
                                    <input type="text" value="" placeholder="Last Name" />
                                    <input type="text" value="" placeholder="Address" />
                                    <input type="text" value="" placeholder="Unit" />
                                    <input type="text" value="" placeholder="City" />
                                    <input type="text" value="" placeholder="State" />
                                    <input type="text" value="" placeholder="Zip Code" />
                                </div>
                            </div>
                            <div>
                                <p>Credit Card</p>
                                <div className="input-container">
                                    <input type="text" value="" placeholder="Credit Card Number" />
                                    <input type="text" value="" placeholder="Exp Date" />
                                    <input type="text" value="" placeholder="CVV" />
                                </div>
                            </div>
                        </div>
                        <p className="disclaimer">Include details of payment process. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
                Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit 
                lobortis nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="skip" onClick={this.goBackToSignup}>Go back.</p>
                        <button type="submit" className="start-btn" onClick={this.login}>CONFIRM</button>
                        <div className="exit-btn" onClick={this.props.closeModal}>X</div>
                    </div>
                }
            </div>
        )
    }
}

const mapState = state => ({})
const mapDispatch = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        getUser: (user) => dispatch(getUser(user))
    }
}

export default connect(mapState, mapDispatch)(Registration)

