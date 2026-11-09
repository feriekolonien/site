import { ImagesIcon } from '@sanity/icons/Images';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const album = defineType({
  name: 'album',
  title: 'Album',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Forsidebilde',
      type: 'image',
    }),
    defineField({
      name: 'groups',
      title: 'Grupper',
      description:
        'Del albumet inn i grupper (f.eks. 1., 2. og 3. parti). Vises som egne seksjoner på nettsiden, i denne rekkefølgen.',
      type: 'array',
      of: [defineArrayMember({ type: 'albumGroup' })],
    }),
    defineField({
      name: 'images',
      title: 'Bilder uten gruppe',
      description: 'Vises under gruppene. Eldre album bruker kun dette feltet.',
      type: 'array',
      of: [defineArrayMember({ type: 'image' })],
      options: { layout: 'grid' },
    }),
  ],
  orderings: [
    {
      title: 'Tittel (nyeste først)',
      name: 'titleDesc',
      by: [{ field: 'title', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
});
