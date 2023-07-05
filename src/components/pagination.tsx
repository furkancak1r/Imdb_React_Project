/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

interface Props {
  pageNumber: number;
  onDataChange: (newPageNumber: number) => void;
}

export default class Pagination extends Component<Props> {
  handleIncreasePageNumber = () => {
    const { pageNumber, onDataChange } = this.props;
    onDataChange(pageNumber + 1);
  };

  handleDecreasePageNumber = () => {
    const { pageNumber, onDataChange } = this.props;
    if (pageNumber > 1) {
      onDataChange(pageNumber - 1);
    }
  };

  handleDataChange = (updatedNumber: number) => {
    const { onDataChange } = this.props;

    onDataChange(updatedNumber);
  };

  render() {
    const { pageNumber } = this.props;

    return (
      <nav style={{ cursor: "pointer" }} aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumber > 1 && ( // Bu satırı ekledim
          <li className="page-item">
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span
                onClick={this.handleDecreasePageNumber}
                className="sr-only"
              >
                Previous
              </span>
            </a>
          </li>
          )} 
          {pageNumber > 1 && (
            <li
              onClick={() => this.handleDataChange(pageNumber - 1)}
              className="page-item"
            >
              <a className="page-link">{pageNumber - 1}</a>
            </li>
          )}
          <li className="page-item active">
            <a className="page-link">{pageNumber}</a>
          </li>
          <li
            onClick={() => this.handleDataChange(pageNumber + 1)}
            className="page-item"
          >
            <a className="page-link">{pageNumber + 1}</a>
          </li>
          <li className="page-item">
            <a className="page-link" aria-label="Next">
              <span onClick={this.handleIncreasePageNumber} className="sr-only">
                Next
              </span>
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
