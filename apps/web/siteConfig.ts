function isReleaseDate() {
  return Date.now() > new Date('2025-12-24T00:00:00').getTime();
}

const siteConfig = {
  openForApplication: () => isReleaseDate(),
  waitingListEnabled: true,
  applicationURL: '/soknadsskjema',
  getDates: () => [
    {
      emoji: '🦀',
      name: '1. parti',
      dateRange: '24. juni - 4. juli',
    },
    {
      emoji: '☀️',
      name: '2. parti',
      dateRange: '11. juli - 21. juli',
    },
    {
      emoji: '🐚',
      name: '3. parti',
      dateRange: '28. juli - 7. august',
    },
  ],
};

export default siteConfig;
