import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {
  state = { isActive: false }

  toogleButton = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const { OnToogleSidebar, SidebarActive } = this.props

    return (
      <div className="navbar">
        <a href="javascript:undefined" className="sidebarLink"
          onClick={() => this.toogleButton() || OnToogleSidebar() }>
          <FontAwesomeIcon icon={this.state.isActive ? faArrowLeft : faBars } />
        </a>
        <div className="title">Hamburguerias do Bairro</div>
      </div>
    )
  }
}

export default NavBar
