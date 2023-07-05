import { Component } from "react";
interface CardbackProps {
  cardbacktitle: string;
}
export default class Cardback extends Component<CardbackProps> {
  render() {
    const { cardbacktitle } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "405px",
          height: "229px",
          cursor: "pointer",
          borderRadius: "20px",
          boxShadow: "7px 10px 30px black",
        }}
      >
        <h1 style={{ textAlign: "center", fontWeight: "350" }}>
          {cardbacktitle}
        </h1>
      </div>
    );
  }
}
