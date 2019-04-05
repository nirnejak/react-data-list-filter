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
                                    <p><strong>{this.props.submission.project}</strong></p>
                                    <p>By: {this.props.submission.member}</p>
                                </div>
                                <div className="col-lg-2">
                                    <p style={{ textTransform: 'capitalize', color: this.props.submission.status === 'pending' ? 'red' : 'green' }}>
                                        {this.props.submission.status}
                                    </p>
                                    <p style={{ textTransform: 'capitalize'}}>{this.props.submission.type}</p>
                                </div>
                                <div className="col-lg-3 text-right">
                                    <button className="btn btn-danger" onClick={(e) => this.props.markPending(id)} title="Pending">
                                        <i className="fas fa-times"></i>
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-success" onClick={(e) => this.props.markApproved(id)} title="Approve">
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