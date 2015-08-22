import RootContainerDiagram from '../diagrams/root-container.xml';

import RelayRouteTopic from './query-config';
import ContainerTopic from './container';

export default {
  title: 'Relay.RootContainer',
  description: 'Relay.RootContainer takes a Component (wrapped up in a Relay.Container) and a Relay.Route, turns these into a full query and sends it off to the GraphQL server. It’s also responsible for rendering your loading UI (spinners galore!), rendering the UI once the data has been loaded, and rendering a UI for when a query fails.',
  officialDocs: 'https://facebook.github.io/relay/docs/guides-root-container.html#content',
  diagram: RootContainerDiagram,
  children: [
    RelayRouteTopic,
    ContainerTopic
  ]
}
