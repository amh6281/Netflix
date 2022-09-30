import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import "./listItem.scss";

const ListItem = () => {
  return (
    <div className="listItem">
      <img
        src="https://user-images.githubusercontent.com/83646986/193170397-73ff8552-5ece-430c-aeaa-d900a69a2c78.jpg"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
