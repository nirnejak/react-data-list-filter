import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
            <ul class="pagination justify-content-center">
                <li className="page-item"><a href="#" className="page-link">Previous</a></li>
                <li className="page-item"><a href="#" className="page-link">1</a></li>
                <li className="page-item"><a href="#" className="page-link">2</a></li>
                <li className="page-item"><a href="#" className="page-link">3</a></li>
                <li className="page-item"><a href="#" className="page-link">Next</a></li>
            </ul>
        )
    }
}
