import React, { Component } from 'react'

export default class SubmissionItem extends Component {
    render() {
        const { id } = this.props.submission;
        return (
            <div>
                <div className="card my-3">
                    <div className="card-body">
                        <div className="card-text">
                            <div className="row">
                                <div className="col-lg-7">
                                    <p><strong>{this.props.submission.member}<br /></strong></p>
                                </div>
                                <div className="col-lg-2">
                                    <p style={{ textTransform: 'capitalize', color: this.props.submission.status === 'pending' ? 'red' : 'green' }}>
                                        {this.props.submission.status}
                                    </p>
                                </div>
                                <div className="col-lg-3 text-right">
                                    <button className="btn btn-danger" onClick={this.props.markPending.bind(this, id)}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-success" onClick={this.props.markApproved.bind(this, id)}>
                                        <i className="fas fa-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}