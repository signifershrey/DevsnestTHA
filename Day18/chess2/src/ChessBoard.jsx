import React from "react";
import "./ChessBoard.css";

const ChessBoard = () => {
  return (
    <div className="board">
      <Row index="1" />
      <Row index="2" />
      <Row  index="3" />
      <Row  index="4"/>
      <Row  index="5"/>
      <Row  index="6"/>
      <Row  index="7"/>
      <Row  index="8"/>
    </div>
  );
};

function Row(props) {
  return (
    <div className="row">
      <div
        className="place"
        col="1"
        style={{ backgroundColor: props.index % 2 != 0 ? "black" : "white" }}
      ></div>
      <div
        className="place"
        col="2"
        style={{ backgroundColor: props.index % 2 != 0 ? "white" : "black" }}
      ></div>
      <div
        className="place"
        col="3"
        style={{ backgroundColor: props.index % 2 != 0 ? "black" : "white" }}
      ></div>
      <div
        className="place"
        col="4"
        className="place"
        col="2"
        style={{ backgroundColor: props.index % 2 != 0 ? "white" : "black" }}
      ></div>
      <div
        className="place"
        col="5"
        style={{ backgroundColor: props.index % 2 != 0 ? "black" : "white" }}
      ></div>
      <div
        className="place"
        col="6"
        className="place"
        col="2"
        style={{ backgroundColor: props.index % 2 != 0 ? "white" : "black" }}
      ></div>
      <div
        className="place"
        col="7"
        style={{ backgroundColor: props.index % 2 != 0 ? "black" : "white" }}
      ></div>
      <div
        className="place"
        col="8"
        className="place"
        col="2"
        style={{ backgroundColor: props.index % 2 != 0 ? "white" : "black" }}
      ></div>
    </div>
  );
}

export default ChessBoard;
