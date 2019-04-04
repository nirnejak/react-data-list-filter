import React, { Component } from 'react'
import SubmissionItem from './SubmissionItem';

export default class SubmissionList extends Component {
    render() {
        return this.props.submissions.map(submission => (
            <SubmissionItem submission={submission} markApproved={this.props.markApproved} markPending={this.props.markPending} />
        ));
    }
}