import clsx from "clsx";
import classes from "./SectionTitle.module.css";

const SectionTitle = ({ center, children, tag }) => {
  return (
    <h2 className={clsx(classes.sectionTitle, center && classes.center)}>
      <div>{children}</div>
      {tag && <div className={classes.tag}>{tag}</div>}
    </h2>
  );
};

export default SectionTitle;
