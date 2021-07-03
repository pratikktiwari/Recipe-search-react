import React from "react";
import "./App.css";

export default class SearchArea extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <input
          onChange={this.props.handleOnChange}
          placeholder="type ingredient here"
          value={this.props.searchTextValue}
          type="text"
        />
        <button onClick={this.props.onClickTrigger}>Check</button>
        {this.props.warningMessageVisible && (
          <div className="warningRed">Please enter value in search box</div>
        )}
        <div>
          {/* Type in some ingredients you like and we will suggest you nice dishes that use it */}
        </div>
      </div>
    );
  }
}
