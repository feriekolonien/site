export default {
  widgets: [
    {
      name: 'project-info',
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recently edited',
        order: '_updatedAt desc',
        limit: 10,
        types: ['album'],
      },
      layout: { width: 'medium' },
    },
  ],
};
