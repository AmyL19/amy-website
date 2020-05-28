import React, { Component } from "react";
import { stack as Menu } from "react-burger-menu";

class Navigation extends React.Component<{}, { menuOpen: boolean }> {
  readonly state = {
    menuOpen: false,
  };

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state: any) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state: any) => this.handleStateChange(state)}
        >
          <a onClick={() => this.closeMenu()} href="#Home">
            Home
          </a>
          <a onClick={() => this.closeMenu()} href="#Experiences">
            Experiences
          </a>
          <a onClick={() => this.closeMenu()} href="#Projects">
            Projects
          </a>
          <a onClick={() => this.closeMenu()} href="#Resume">
            Resume
          </a>
          <a onClick={() => this.closeMenu()} href="#Contact">
            Contact
          </a>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
