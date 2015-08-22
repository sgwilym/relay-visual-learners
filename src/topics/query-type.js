import QueryTypeDiagram from '../diagrams/query-type.xml';

export default {
  title: 'Query Type',
  description: 'To query data, your schema will need a Query Type containing fields that fetch your various object types. These fields have resolve methods that describe how the requested data should actually be fetched. Relay will also want a special field here that will allow you to fetch an object of any type given its Global ID.',
  officialDocs: 'https://facebook.github.io/relay/docs/graphql-object-identification.html#content',
  diagram: QueryTypeDiagram
}
