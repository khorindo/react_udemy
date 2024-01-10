import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Romeo" body="React.js is awesome!" />
      <Post author="Walter" body="JESSE... WE NEED TO COOK..." />
    </ul>
  );
}
export default PostsList;
