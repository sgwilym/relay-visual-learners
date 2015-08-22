import ContainerDiagram from '../diagrams/container.xml';

import ReactComponentTopic from './react-component';

export default {
  title: 'Relay.Container',
  description: 'Relay.Container is a higher order component that wraps around your React Component and ensures that it gets the data it depends on before rendering. This is where you’ll declare your component’s data dependencies with query fragments.',
  officialDocs: 'https://facebook.github.io/relay/docs/guides-containers.html#content',
  diagram: ContainerDiagram,
  children: [
    ReactComponentTopic
  ]
}
