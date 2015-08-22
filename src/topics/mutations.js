import MutationDiagram from '../diagrams/mutations.xml';

export default {
  title: 'Mutations',
  description: 'To change data in your app you’ll need mutations. In order for Relay to know which objects will be changed by mutations, and do things like optimistic updates, you’ll need to let it know up front about how your mutations behave. What arguments does this mutation take? What might the returned payload look like? Which associations will be changed? This rabbit hole goes deep.',
  officialDocs: 'https://facebook.github.io/relay/docs/guides-mutations.html#content',
  diagram: MutationDiagram
};
