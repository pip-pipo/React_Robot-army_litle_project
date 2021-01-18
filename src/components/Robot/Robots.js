import React, { Component } from "react";
import styled from "styled-components";
import Robot from './Robot'
const Layout = styled.div`
  background-color: white;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
class Robots extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      loading: true,
      error: "",
    };
  }
  async componentDidMount() {
    try {
      const robots = await fetch("https://jsonplaceholder.typicode.com/users");
      const robotsJSON = await robots.json();
      if (robotsJSON) {
        this.setState({
          robots: robotsJSON,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }
  render() {
    const { robots, loading, error } = this.state;
    if (loading || error) {
      return <div>{loading ? 'Loading...' : error}</div>;
    }
    return (
      <>
        <Layout>
          {robots.map((robot, key) => (
            <Robot key={key} robot={robot} />
          ))}
        </Layout>
      </>
    );
  }
}
export default Robots;