import GraphQLDiagram from '../diagrams/graphql-implementation.xml';

import SchemaTopic from './graphql-schema.js';

export default {
  title: 'GraphQL Implementation',
  description: 'You’ll need a GraphQL implementation that will be able to parse and validate your GraphQL schema, as well as execute queries sent to it from Relay. It’s already been implemented in a few different languages, and there are more popping up all the time!',
  officialDocs: 'http://facebook.github.io/graphql/',
  diagram: GraphQLDiagram,
  children: [
    SchemaTopic
  ]
}
