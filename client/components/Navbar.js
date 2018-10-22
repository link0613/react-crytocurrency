import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as Scroll from 'react-scroll';
import history from '../history'
import { getUser } from '../store'
import {DropdownButton, MenuItem} from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

const ScrollLink = Scroll.Link
const animateScroll = Scroll.animateScroll

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.checkLocation = this.checkLocation.bind(this)
    this.logout = this.logout.bind(this)
    this.openSettings = this.openSettings.bind(this)
    this.state = {
      isHome: true,
      width: props.width
    };
    if (history.location.pathname != '/' && history.location.pathname != '/home') {
      this.state.isHome = false;
    }
  }

  componentWillMount(){
    this.setState({width: window.innerWidth});
  }

  checkLocation(position, isHome) {
    this.setState({
      position: position,
      isHome: isHome
    })

    this.forceUpdate();

    {/*Close the dropdown menu*/}
    document.dispatchEvent(new MouseEvent('click'));
  }

  logout() {
     this.props.getUser("")
     history.push("/")
  }

  openSettings() {
     history.push("/settings")
  }

  render() {
    var position = this.state.position;
    var isHome = this.state.isHome;
    const scrollWithOffset = (el) => {
      setTimeout(function() {
        var scrollOffset = 0;
        if (this.state.width < 768) {
          scrollOffset = 50;
        }
        const elementPosition = el.offsetTop - scrollOffset;
        animateScroll.scrollTo(elementPosition, {smooth:true,duration:500})
      }.bind(this), 200)
    }
    return (
        <div id="navbar">
          <div className="left">
              {/*<Link to="/home">About</Link>*/}
              <DropdownButton className={position === 'TOOLKIT' || position === 'INDEX_BUILDER' ? 'active' : ''} title={'Tools'} id="tools-dropdown">
                <MenuItem onClick={() => {this.checkLocation('TOOLKIT', false)}} componentClass={Link} href="/toolkit" to="/toolkit" active={position === 'TOOLKIT'}>Crypto Analytical Toolkits</MenuItem>
                <MenuItem onClick={() => {this.checkLocation('INDEX_BUILDER', false)}} componentClass={Link} href="/indexbuilder" to="/indexbuilder" active={position === 'INDEX_BUILDER'}>Crypto Index Builder</MenuItem>
                <MenuItem divider />
                <li role="presentation">
                  {isHome ? (
                      <ScrollLink onClick={() => {this.checkLocation('LEARN', true)}} offset={-50} to="about" smooth={true} duration={500}>Learn the Basics<br /> <p>It’s easy to get lost or overwhelmed in the new and noisy world of crypto. If you’re new to the crypto space, we highly recommend reading our carefully curated beginner{"\'"}s guide.</p></ScrollLink>
                    ) : (
                      <Link onClick={() => {this.checkLocation('LEARN', true)}} scroll={el => scrollWithOffset(el)} to="/#about">Learn the Basics<br /><p>It’s easy to get lost or overwhelmed in the new and noisy world of crypto. If you’re new to the crypto space, we highly recommend reading our carefully curated beginner{"\'"}s guide.</p></Link>
                  )}
                </li>
              </DropdownButton>

              {isHome ? (
                  <ScrollLink onClick={() => {this.checkLocation('PANDA_INDEX_FUND',true)}} offset={-50} className={position === 'PANDA_INDEX_FUND' ? 'active' : ''} to="panda-fund" smooth={true} duration={500}><div className="hidden-xs">Panda PoW Index Funds</div><div className="hidden-sm hidden-md hidden-lg hidden-xl">Panda Funds</div></ScrollLink>
                ) : (
                  <Link onClick={() => {this.checkLocation('PANDA_INDEX_FUND',true)}} scroll={el => scrollWithOffset(el)} className={position === 'PANDA_INDEX_FUND' ? 'active' : ''} to="/#panda-fund"><div className="hidden-xs">Panda PoW Index Funds</div><div className="hidden-sm hidden-md hidden-lg hidden-xl">Panda Funds</div></Link>
              )}
          </div>
          <div className="middle">
              {isHome ? (
                  <ScrollLink onClick={() => {this.checkLocation('LANDING',true)}} to="landing" smooth={true} duration={500}><img id="logo" src="./assets/panda_icon_white.svg" /></ScrollLink>
                ) : (
                  <Link onClick={() => {this.checkLocation('LANDING',true)}} to="/"><img id="logo" src="./assets/panda_icon_white.svg" /></Link>
              )}
          </div>
          <div className="right">
              {isHome ? (
                  <ScrollLink onClick={() => {this.checkLocation('TEAM',true)}} offset={-50} className={position === 'TEAM' ? 'active' : ''} to="team" smooth={true} duration={500}>Team</ScrollLink>
                ) : (
                  <Link onClick={() => {this.checkLocation('TEAM',true)}} scroll={el => scrollWithOffset(el)} className={position === 'TEAM' ? 'active' : ''} to="/#team">Team</Link>
              )}

              {isHome ? (
                  <ScrollLink onClick={() => {this.checkLocation('FAQ',true)}} offset={-50} className={position === 'FAQ' ? 'active' : ''} to="faq" smooth={true} duration={500}>FAQ</ScrollLink>
                ) : (
                  <Link onClick={() => {this.checkLocation('FAQ',true)}} scroll={el => scrollWithOffset(el)} className={position === 'FAQ' ? 'active' : ''} to="/#faq">FAQ</Link>
              )}
          </div>
          {
            this.props.user &&
            <div className="loggedin">
              <div className="loggedinContainer">
                <div id="initial-icon">{this.props.user.slice(0, 1)}</div>
                <p onClick={function(event){ this.openSettings(); this.checkLocation('SETTINGS',false)}}>Welcome, {this.props.user}</p>
              </div>
                <Link onClick= {() => {this.checkLocation('DASHBOARD',false)}} to="/dashboard">Dashboard</Link>
                <a onClick={this.logout}>Log Out</a>
            </div>
          }
        </div>
    )
  }
}

const mapState = state => ({ user: state.user })

const mapDispatch = dispatch => ({
  getUser: (user) => dispatch(getUser(user))
})

export default connect(mapState, mapDispatch)(Navbar)

// export default Navbar

// <ScrollLink activeClass="active" to="about" smooth={true} duration={500}>About</ScrollLink>
