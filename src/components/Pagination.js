import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        let prevButton;
        if (this.props.currentPage > 1) {
            prevButton = <li className="page-item"><p className="page-link">Prev</p></li>
        }

        let nextButton;
        if (this.props.currentPage < this.props.totalPages[this.props.totalPages.length-1]) {
            nextButton = <li className="page-item"><p className="page-link">Next</p></li>
        }

        let pages = [];
        for(let i = 1; i<= this.props.totalPages; i++) {
            pages.push(<li className="page-item"><p className="page-link">{i}</p></li>);
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
