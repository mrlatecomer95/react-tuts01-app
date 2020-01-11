import React from "react";
const NavBarItems = props => {
  const { name, path } = props;
  return (
    <button
      onClick={() => {
        console.log(path);
      }}
    >
      {name}
    </button>
  );
};

export default NavBarItems;
