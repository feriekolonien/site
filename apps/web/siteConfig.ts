function isReleaseDate() {
  return Date.now() > new Date('2022-12-24T12:00:00').getTime();
}

const siteConfig = {
  openForApplication: () => isReleaseDate(),
  waitingListEnabled: false,
  applicationURL: '/soknadsskjema',
  getDates: () =>
    isReleaseDate()
      ? [
          { emoji: '🦀', name: '1. parti', dateRange: '21. juni – 1. juli' },
          { emoji: '☀️', name: '2. parti', dateRange: '8. juli – 8. juli' },
          { emoji: '🐚', name: '3. parti', dateRange: '25. juli – 4. august' },
        ]
      : [],
};

export default siteConfig;
