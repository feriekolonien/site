function isReleaseDate() {
  return Date.now() > new Date('2022-12-24T12:00:00').getTime();
}

const siteConfig = {
  openForApplication: () => isReleaseDate(),
  waitingListEnabled: false,
  applicationURL: '/soknadsskjema',
  getDates: () => [
    {
      emoji: '🦀',
      name: '1. parti',
      dateRange: 'Tirsdag 27. juni - Fredag 7. juli',
    },
    {
      emoji: '☀️',
      name: '2. parti',
      dateRange: '14. juli - Mandag 24. juli',
    },
    {
      emoji: '🐚',
      name: '3. parti',
      dateRange: '31. juli - Torsdag 10. august',
    },
  ],
};

export default siteConfig;
