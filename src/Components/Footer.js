import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} style={{ color: "#F5621E" }}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer style={{ color: "#E3EDA4" }}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul>
              <li>A personal Portfolio</li>
            </ul>

            <ul className="copyright">
              <li>&copy; All Rights Reserved by Kabir Hasan</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
