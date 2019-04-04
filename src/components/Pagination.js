import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        let prevButton;
        if (parseInt(this.props.currentPage) > 1) {
            prevButton = <li className="page-item"><button className="page-link" onClick={this.props.changePage.bind(this, this.props.currentPage - 1)}>Prev</button></li>
        }
        let nextButton;
        if (parseInt(this.props.currentPage) < this.props.totalPages) {
            nextButton = <li className="page-item"><button className="page-link" onClick={this.props.changePage.bind(this, this.props.currentPage + 1)}>Next</button></li>
        }

        let pages = [];
        for(let i = 1; i<= this.props.totalPages; i++) {
            pages.push(<li className="page-item"><button className="page-link" onClick={this.props.changePage.bind(this, i)}>{i}</button></li>);
        }

        return (
            <ul className="pagination justify-content-center">
                { prevButton }

                { pages.map(page => page) }

                { nextButton }
            </ul>
        )
    }
}
