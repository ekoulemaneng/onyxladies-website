import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.jpeg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
		style={{backgroundColor: "black", fontWeight: "bold"}}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="OLC" style={{ width: '44px', height: '44px' }} />
				<span style={{color: 'white', marginLeft: '.5rem', fontSize: '1.25rem'}}>Onyx Ladies</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
			  style={{color: 'white'}}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
			style={{backgroundColor: 'black'}}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about" style={{color: 'white'}}>
                Qui sommes-nous ?
              </Link>
              <Link className="navbar-item" to="/mission" style={{color: 'white'}}>
                 Notre Mission
              </Link>
              <Link className="navbar-item" to="/blog" style={{color: 'white'}}>
                Blog
              </Link>
              <Link className="navbar-item" to="/contact" style={{color: 'white'}}>
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
