import { useRef, useState } from "react";

import useOutsideClick from "hooks/useOutsideClick";
import classes from "./MenuContainer.module.css";

const MenuContainer = ({ uniqueKey, options, children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef();

  useOutsideClick(menuRef, () => setIsMenuActive(false));

  return (
    <div className={classes.menuWrap} ref={menuRef}>
      <div onClick={() => setIsMenuActive}>{children}</div>

      {isMenuActive && (
        <div className={classes.options}>
          {options.map((el, idx) => {
            return (
              <div
                key={uniqueKey + "option-" + idx}
                className={classes.option}
                onClick={() => {
                  onselect(el);
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
