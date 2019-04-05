import React, { Component } from 'react'
import Select from 'react-select';

export default class FilterForm extends Component {
    render() {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className="card-text">
                        <Select options={this.props.projectType} onChange={(e) => this.props.changeProjectType(e)} />
                        <br></br>
                        <div className="form-group pl-2">
                            <input type="checkbox" name="field1" id="approved" onChange={(e) => this.props.showApproved(e)} />
                            &nbsp;&nbsp;
                            <label htmlFor="approved">Show Approved</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}