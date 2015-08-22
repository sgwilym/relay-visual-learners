import RelayDiagram from '../diagrams/relay.xml';

import RootContainerTopic from './root-container';
import NetworkLayerTopic from './network-layer';
import SchemaCopyTopic from './schema-copy';
import MutationsTopic from './mutations';

export default {
  title: 'Relay',
  description: 'Relay is a framework for Javascript applications that aims to abstract away the repetitive work of exchanging data with a server. It works together with a GraphQL server to query, deliver and mutate data in a consistent, dependable way. A tall order!',
  officialDocs: "https://facebook.github.io/relay/",
  diagram: RelayDiagram,
  width: 321,
  height: 339,
  children: [
    RootContainerTopic,
    NetworkLayerTopic,
    SchemaCopyTopic,
    MutationsTopic
  ]
}
