import { loadMore } from "images";
import classes from "./LoadMore.module.css";

const LoadMore = () => {
  return (
    <button className={classes.loadMore}>
      <img src={loadMore} alt="loadMore" />
      <div>Load More</div>
    </button>
  );
};

export default LoadMore;
