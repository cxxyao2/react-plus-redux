import React, { Component } from "react";
import StoreContext from "../contexts/storeContext";
import { loadBugs } from "../store/bugs";

class Bugs extends Component {
  // Method1: static property
  static contextType = StoreContext;
  state = { bugs: [] };

  componentDidMount() {
    const store = this.context;
    this.unsubscribe = store.subscribe(() => {
      const bugsInStore = store.getState().entities.bugs.list;
      if (this.state.bugs !== bugsInStore) this.setState({ bugs: bugsInStore });
    }); // add a listener

    store.dispatch(loadBugs());
  }

  componentWillUnmount() {
    this.unsubscribe(); // avoid memory leak
  }
  render() {
    return (
      <ul>
        {this.state.bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
    );
  }
}

// Method2: static property
// Bugs.contextType = StoreContext;
export default Bugs;
