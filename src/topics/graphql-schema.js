import SchemaDiagram from '../diagrams/schema.xml';

import ObjectTypeTopic from './object-type';
import QueryTypeTopic from './query-type';
import MutationType from './mutation-type';

export default {
  title: 'GraphQL Schema',
  description: 'A Schema describes how your data is structured by creating a hierarchy of types. These types can be your application’s objects — e.g users, likes or photos — or other types used to query and mutate your application’s data.',
  diagram: SchemaDiagram,
  children: [
    ObjectTypeTopic,
    QueryTypeTopic,
    MutationType
  ]
}
