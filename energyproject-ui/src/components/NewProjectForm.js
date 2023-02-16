import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewProjectForm extends React.Component {
    state = {
        id: null,
        project_name: "",
        project_number: null,
        number_3l_code: "",
        project_deal_type_id: "",
        project_group_id: "",
        project_status_id: "",
        company_id: null,
    };

    componentDidMount() {
        if (this.props.project) {
            const { id, project_name, project_number, number_3l_code, project_deal_type_id,
                project_group_id, project_status_id, company_id } = this.props.project;
            this.setState({ id, project_name, project_number, number_3l_code, project_deal_type_id,
                project_group_id, project_status_id, company_id});
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createproject = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editproject = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.id, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.project ? this.editproject : this.createproject}>
                <FormGroup>
                    <Label for="project_name">Project Name:</Label>
                    <Input
                        type="text"
                        name="project_name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.project_name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="project_number">Project Number:</Label>
                    <Input
                        type="number"
                        name="project_number"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.project_number)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="number_3l_code">Number 3l Code:</Label>
                    <Input
                        type="text"
                        name="number_3l_code"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.number_3l_code)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="project_deal_type_id">Project Deal Type:</Label>
                    <Input
                        type="text"
                        name="project_deal_type_id"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.project_deal_type_id)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="project_group_id">Project Group ID:</Label>
                    <Input
                        type="text"
                        name="project_group_id"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.project_group_id)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="project_status_id">Project Status ID:</Label>
                    <Input
                        type="text"
                        name="project_status_id"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.project_status_id)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="company_id">Company ID:</Label>
                    <Input
                        type="number"
                        name="company_id"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.company_id)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewProjectForm;