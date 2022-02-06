import { RiPriceTag3Line } from 'react-icons/ri';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: RiPriceTag3Line,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
