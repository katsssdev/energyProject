import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ProjectList from "./ProjectList";

import axios from "axios";

import { API_URL } from "../constants";
import NewProjectModal from "./NewProjectModal";

class Home extends Component {
    state = {
        projects: []
    };

    componentDidMount() {
        this.resetState();
    }

    getprojects = () => {
        axios.get(API_URL).then(res => this.setState({ projects: res.data }));
    };

    resetState = () => {
        this.getprojects();
    };

    render() {
        return (
            <Container style={{ marginTop: "20px", marginLeft: 0 }}>
                <Row>
                    <Col>
                        <ProjectList
                            projects={this.state.projects}
                            resetState={this.resetState}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewProjectModal create={true} resetState={this.resetState} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;