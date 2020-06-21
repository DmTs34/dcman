import React from "react";
import Logo from "./logo";

export default class Main extends React.Component {
  render() {
    return  <div className="app">
                <Logo />
                <div className="service_info">
                    service info
                </div>
                <div className="main_div">
                    main div
                </div>
                <div className="user_info">
                    user info will be here
                </div>
            </div>
  }
}
