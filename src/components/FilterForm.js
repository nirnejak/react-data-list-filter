import React, { Component } from 'react'
import Select from 'react-select';

export default class FilterForm extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-text">
                        <Select options={this.props.projectType} onChange={this.props.changeProjectType.bind(this)} />
                        <br></br>
                        <div className="form-group pl-2">
                            <input type="checkbox" name="field1" id="approved" onChange={this.props.showApproved.bind(this)} />
                            &nbsp;&nbsp;
                            <label htmlFor="approved">Show Approved</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}