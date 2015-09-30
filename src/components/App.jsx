import React, { Component, PropTypes } from 'react/addons';
import Diagram from './Diagram';
import Topic from './Topic';
import styles from './App.scss';

export default class App extends Component {

  constructor(props) {
    super(props);

    var topicState = {};
    const addTopicTitlesToTopicObj = (topic) => {
      topicState[topic.title] = {
        highlighted: false,
        collapsed: true
      }
    };

    const walkTopicTree = (topic) => {
      addTopicTitlesToTopicObj(topic);
      if (topic.children) {
        topic.children.map(walkTopicTree);
      }
    }

    for (let topic of props.topics) {
      walkTopicTree(topic);
    }

    this.state = {
      topics: topicState
    };

    this.topicUnderMouseChanged = this.topicUnderMouseChanged.bind(this);
    this.topicClicked = this.topicClicked.bind(this);
  }

  topicUnderMouseChanged(topicTitle, isUnderMouse) {
    const nextState = React.addons.update(this.state, {
      topics: {
        [topicTitle]: {
          highlighted: { $set: isUnderMouse }
        }
      }
    });
    this.setState(nextState);
  };

  topicClicked(topicTitle) {
    const collapsed = this.state.topics[topicTitle].collapsed;
    const nextState = React.addons.update(this.state, {
      topics: {
        [topicTitle]: {
          collapsed: { $set: !collapsed }
        }
      }
    });
    this.setState(nextState);
  }

  render() {

    const { topics } = this.props;
    const topicState = this.state.topics;

    const makeDiagram = (topic) => {
      return (
        <svg key={topic.title} width={topic.width} height={topic.height} viewBox={`0 0 ${topic.width} ${topic.height}`}>
          <Diagram topic={topic} />
        </svg>
      );
    }

    const makeTopic = (topic) => {
      return <Topic topic={topic} key={topic.title} />;
    }

    const injectHighlightAndCallback = (topic) => {
      return Object.assign(
        topic,
        { highlighted: topicState[topic.title].highlighted },
        { collapsed: topicState[topic.title].collapsed },
        { underMouseChanged: this.topicUnderMouseChanged },
        { topicClicked: this.topicClicked },
        { children: topic.children ? topic.children.map(injectHighlightAndCallback) : topic.children }
      );
    };

    const topicsWithExtras = topics.map(injectHighlightAndCallback);

    return (
      <div className={styles.root}>
        <div className={styles.diagram}>
          { topicsWithExtras.map(makeDiagram) }
        </div>
        <ul className={styles.glossary}>
          <div className={styles.intro}>
            <h1>Relay for Visual Learners</h1>
            <p>Relay is a new framework from Facebook that promises to simplify a problem complex enough that the simplification is rather complex in itself <a href="docs/why-relay.html">(and here’s a visual explanation of the problem Relay solves)</a>.</p>
            <p>I tend to learn things better when I can <em>see</em> how things fit together, so I made this interactive diagram that attempts to explain how Relay’s various parts fit together.</p>
          </div>
          { topicsWithExtras.map(makeTopic) }
        </ul>
        <div className={styles.credit}>Created by <a href="http://gwil.co">Sam Gwilym</a> &bull; <a href="https://github.com/sgwilym/relay-visual-learners">Github Repo</a></div>
      </div>
    );
  }
}

App.propTypes = {
  topics: PropTypes.array.isRequired
}
