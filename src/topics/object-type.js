import ObjectTypeDiagram from '../diagrams/object-type.xml';
import ObjectTypeFields from './object-type-fields';

export default {
  title: 'Object Type',
  description: 'This is your generic object type. It could be anything in your data model, such as a user, a blog post or product review.',
  diagram: ObjectTypeDiagram,
  children: ObjectTypeFields
}
