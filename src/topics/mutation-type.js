import MutationTypeDiagram from '../diagrams/mutation-type.xml';

export default {
  title: 'Mutation Type',
  description: 'If you want Relay to be able to change the data on your server, you’ll need a Mutation Type. Each of your mutations will need to be root fields on this Mutation Type, and return an object representing the successful mutation’s payload.',
  officialDocs: 'https://facebook.github.io/relay/docs/graphql-mutations.html#content',
  diagram: MutationTypeDiagram
}
