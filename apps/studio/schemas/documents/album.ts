import { RiCamera3Line } from 'react-icons/ri';

const album = {
  name: 'album',
  type: 'document',
  icon: RiCamera3Line,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'coverImage',
      type: 'image',
    },
    {
      name: 'groups',
      title: 'Grupper',
      description:
        'Del albumet inn i grupper (f.eks. 1., 2. og 3. parti). Vises som egne seksjoner på nettsiden, i denne rekkefølgen.',
      type: 'array',
      of: [{ type: 'albumGroup' }],
    },
    {
      name: 'images',
      title: 'Bilder uten gruppe',
      description:
        'Vises under gruppene. Eldre album bruker kun dette feltet.',
      type: 'array',
      of: [{ type: 'image' }],
      options: { layout: 'grid' },
    },
  ],
  preview: {
    select: {
      title: 'title',
      coverImage: 'coverImage',
    },
    prepare(selection: any) {
      const { title, coverImage } = selection;

      return {
        title,
        media: coverImage || undefined,
      };
    },
  },
};

export default album;
