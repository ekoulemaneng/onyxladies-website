import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import youtube from '../img/social/youtube.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Accueil
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Qui sommes-nous ?
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/mission">
                        Notre Mission
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Derniers articles
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contactez-nous
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
				<div style={{marginBottom: '1rem'}}>Suivez notre actualité sur les réseaux sociaux.</div>
                <a title="facebook" href="https://web.facebook.com/onyxladies2020">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="YouTube" href="https://youtube.com">
                  <img
                    src={youtube}
                    alt="YouTube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
