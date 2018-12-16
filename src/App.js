import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import CourseList from "./components/CourseList";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CourseList />
      </div>
    );
  }
}

export default App;
