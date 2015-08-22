import React, { Component, PropTypes } from 'react';

export default class Diagram extends Component {

  constructor(props) {
    super(props);

    this.handleUnderMouseChanged = this.handleUnderMouseChanged.bind(this);
    this.handleTopicClicked = this.handleTopicClicked.bind(this);
  }

  handleUnderMouseChanged(isUnderMouse, e) {
    const { topic } = this.props;
    topic.underMouseChanged(topic.title, isUnderMouse);
    e.stopPropagation();
  }

  handleTopicClicked(e) {
    const { topic } = this.props;
    topic.topicClicked(topic.title);
    e.stopPropagation();
  }

  render() {

    const { topic } = this.props;

    const makeTopicGroup = (topic) => {
      return <Diagram topic={topic} key={topic.title} />;
    }

    return (
      <g
        fill={topic.highlighted ? '#f26b00' : '#bbb6b7' }
        onMouseOver={this.handleUnderMouseChanged.bind(this, true)}
        onMouseOut={this.handleUnderMouseChanged.bind(this, false)}
        onClick={this.handleTopicClicked}
      >
        { topic.diagram }
        { topic.children && topic.children.map(makeTopicGroup) }
      </g>
    );
  }
}

Diagram.propTypes = {
  topic: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    officialDocs: PropTypes.string,
    diagram: PropTypes.element.isRequired,
    children: PropTypes.array,
    highlighted: PropTypes.bool.isRequired,
    underMouseChanged: PropTypes.func.isRequired,
    topicClicked: PropTypes.func.isRequired
  }).isRequired
}
