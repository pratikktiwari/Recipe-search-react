import React from "react";
import "./App.css";
import Header from "./Header";
import SearchArea from "./SearchArea";

export default class App extends React.Component {
  state = {
    searchText: "",
    searchClicked: false,
    loading: false,
    searchEmpty: false,
  };
  handleOnChange = (e) => {
    this.setState({ searchText: e.target.value });
    if (this.state.searchEmpty) {
      this.setState({ searchEmpty: false });
    }
  };
  triggerSearch = () => {
    let searchText = this.state.searchText;
    if (!searchText) {
      this.setState({ searchEmpty: true });
    } else {
      //API request
      fetch("http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3")
        .then((response) => response.JSON())
        .then((out) => alert(out));
    }
  };
  render() {
    return (
      <div className="body">
        <Header />
        <div className="centerArea">
          <SearchArea
            handleOnChange={this.handleOnChange}
            searchTextValue={this.state.searchText}
            onClickTrigger={this.triggerSearch}
            warningMessageVisible={this.state.searchEmpty}
          />
        </div>
      </div>
    );
  }
}
