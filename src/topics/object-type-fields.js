import FieldsDiagram from '../diagrams/fields.xml';
import ConnectionFieldDiagram from '../diagrams/connection-field.xml';
import GlobalIDFieldDiagram from '../diagrams/global-id-field.xml';

export default [
  {
    title: 'Fields',
    description: 'The fields in your object describe the kinds of properties that can be queried, such as a user’s email address or favourite colour. They can also describe associated object types, like a user’s profile photo.',
    diagram: FieldsDiagram
  },
  {
    title: 'Connection Fields',
    description: 'To enable fancy stuff like easy pagination, Relay asks that some of your object’s associations are expressed in a standardised way. It involves edges and nodes and other graph theory stuff that can thankfully be handled for you by a helper library.',
    officialDocs: 'https://facebook.github.io/relay/docs/graphql-connections.html#content',
    diagram: ConnectionFieldDiagram
  },
  {
    title: 'Global ID Field',
    description: 'Relay also requires that all objects have a global ID — unique across all types of data — that can be used to refetch any given object without knowing its type.',
    officialDocs: 'https://facebook.github.io/relay/docs/graphql-object-identification.html#content',
    diagram: GlobalIDFieldDiagram
  }
]
