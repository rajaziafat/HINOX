import { useRef, useState } from "react";

import classes from "./MenuContainer.module.css";
import clsx from "clsx";
import useOnClickOutside from "hooks/useOnClickOutside";

const MenuContainer = ({
  uniqueKey,
  options,
  onSelect,
  defaultSelected,
  children,
}) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef();

  useOnClickOutside(menuRef, () => {
    setIsMenuActive(false);
  });

  return (
    <div className={classes.menuWrap} ref={menuRef}>
      <div onClick={() => setIsMenuActive(true)}>{children}</div>

      {isMenuActive && (
        <div className={classes.options}>
          {options.map((el, idx) => {
            return (
              <div
                key={uniqueKey + "option-" + idx}
                className={clsx(
                  classes.option,
                  defaultSelected === el.label && classes.active
                )}
                onClick={() => {
                  onSelect(el);
                  setIsMenuActive(false);
                }}
              >
                {el.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuContainer;
