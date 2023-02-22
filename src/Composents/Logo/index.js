import React from "react";
import useStyle from "./style";

const Logo = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <img className={classes.img} src="logo192.png" />
      React World
    </div>
  );
};
export default Logo;
