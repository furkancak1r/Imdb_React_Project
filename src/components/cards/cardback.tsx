import { Component } from "react";
export default class Cardback extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
          height: "281px",
          cursor: "pointer",
          borderRadius: "20px",
          boxShadow: "7px 10px 30px black",
        }}
      >
        <h1 style={{ textAlign: "center" ,fontWeight:"350"}}>Popular Movies</h1>
      </div>
    );
  }
}
