import React, { Component, PropTypes } from 'react';
import styles from './Topic.scss';

export default class Topic extends Component {

  constructor(props) {
    super(props);

    this.handleUnderMouseChanged = this.handleUnderMouseChanged.bind(this);
  }

  handleUnderMouseChanged(isUnderMouse, e) {
    const { topic } = this.props;
    topic.underMouseChanged(topic.title, isUnderMouse);
    e.stopPropagation();
  }

  render() {

    const { topic } = this.props;

    const makeTopic = (topic) => {
      return <Topic topic={topic} key={topic.title}/>
    }

    return (
      <li
        onMouseOver={this.handleUnderMouseChanged.bind(this, true)}
        onMouseOut={this.handleUnderMouseChanged.bind(this, false)}
        className={styles.root}
      >
        <h2
          onClick={topic.topicClicked.bind(this, topic.title)}
          className={topic.highlighted ? styles.headingHighlighted : styles.heading}
        >{topic.title}</h2>
        <div
          className={topic.highlighted ? styles.detailsHighlighted : styles.details}
          style={{ display: topic.collapsed ? 'none' : 'block' }}
        >
          <p>{topic.description}</p>
          { topic.officialDocs &&
            <p>
              <a
                className={styles.officialDocs}
                href={topic.officialDocs}
              >Official docs</a>
            </p>
          }
        </div>
        <ul className={styles.childTopics}>
          { topic.children && topic.children.map(makeTopic) }
        </ul>
      </li>
    )
  }
}

Topic.propTypes = {
  topic: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    officialDocs: PropTypes.string,
    children: PropTypes.array,
    highlighted: PropTypes.bool.isRequired,
    collapsed: PropTypes.bool.isRequired,
    underMouseChanged: PropTypes.func.isRequired,
    topicClicked: PropTypes.func.isRequired
  }).isRequired
}
