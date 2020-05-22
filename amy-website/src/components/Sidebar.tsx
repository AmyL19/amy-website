import * as React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props: any) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="#top">
        Home
      </a>

      <a
        className="menu-item"
        href="#Experiences"
        data-nav-section="Experiences"
      >
        Experiences
      </a>

      <a className="menu-item" href="/">
        Projects
      </a>

      <a className="menu-item" href="/">
        Resume
      </a>

      <a className="menu-item" href="/">
        Contact
      </a>
    </Menu>
  );
};
