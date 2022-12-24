function isReleaseDate() {
  return Date.now() > new Date('2022-12-24T00:00:00').getTime();
}

const siteConfig = {
  openForApplication: () => isReleaseDate(),
  waitingListEnabled: false,
  applicationURL: '/soknadsskjema',
  getDates: () => [
    {
      emoji: '🦀',
      name: '1. parti',
      dateRange: '27. juni - 7. juli',
    },
    {
      emoji: '☀️',
      name: '2. parti',
      dateRange: '14. juli - 24. juli',
    },
    {
      emoji: '🐚',
      name: '3. parti',
      dateRange: '31. juli - 10. august',
    },
  ],
};

export default siteConfig;
