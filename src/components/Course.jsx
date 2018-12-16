import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Course = ({ course }) => {
  return (
    <div>
      {course ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "56.2%" }}
            image={course.imageLinks ? course.imageLinks.thumbnail : ""}
            title={course.title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {course.title}
            </Typography>
            <Typography component="p">
              {course.description && course.description.slice(0, 200)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={course.previewLink}
              target="_blank"
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default Course;
