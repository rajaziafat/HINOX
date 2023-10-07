import clsx from "clsx";
import classes from "./Section.module.css";

const Section = ({ className, children, ...rest }) => {
  return (
    <section className={clsx(className, classes.section)} {...rest}>
      <div className={classes.inner}>{children}</div>
    </section>
  );
};

export default Section;
