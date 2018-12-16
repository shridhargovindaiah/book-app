import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import Course from "./Course";
//https://www.googleapis.com/books/v1/volumes?q=javascript

class CourseList extends Component {
  constructor() {
    super();

    this.state = {
      url: "https://www.googleapis.com/books/v1/volumes",
      courses: [],
      searchString: "javascript"
    };
  }

  componentDidMount() {
    this.getCourses();
  }

  getCourses = () => {
    let { url, searchString } = this.state;
    url += searchString && "?q=" + searchString;
    Axios.get(url).then(response => {
      if (response.status === 200) {
        this.setState({ courses: response.data.items });
      }
    });
  };

  handleChange = e => {
    if (e.target.value) {
      this.setState({ searchString: e.target.value });
    }
    this.getCourses();
  };

  render() {
    const { courses } = this.state;
    return (
      <div>
        <TextField
          style={{ padding: 24 }}
          id="searchInput"
          placeholder="Search for books here"
          onChange={this.handleChange}
        />
        <Grid container spacing={24} style={{ padding: 24 }}>
          {courses.map(course => (
            <Grid key={course._id} item xs={12} sm={6} lg={4} xl={3}>
              <Course course={course.volumeInfo} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default CourseList;
