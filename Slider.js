import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
// import Item from "./Item";
import "./Slider.css";

const Slider = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  //   useEffect(() => {
  //     let tool = document.getElementById("MuiSvgIcon-root");
  //     tool.setAttribute("data-tooltip", "philani");
  //     document.getElementsByClassName("heading").appendChild(tool);
  //   });
  let tool = document.getElementById("MuiSvgIcon-root");
  //   tool.setAttribute("data-tooltip", "philani");
  //     document.getElementsByClassName("heading").appendChild(tool);

  return (
    <div>
      <h1 className="heading">this is the slider</h1>
      <Carousel
        className="car tooltipped"
        data-position="bottom"
        data-tooltip="I am a tooltip"
        autoPlay={false}
        navButtonsAlwaysVisible={true}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
}

export default Slider;
