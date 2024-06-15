function isReleaseDate() {
  return Date.now() > new Date("2024-12-26T00:00:00").getTime();
}

const siteConfig = {
  openForApplication: () => isReleaseDate(),
  waitingListEnabled: false,
  applicationURL: "/soknadsskjema",
  getDates: () => [
    {
      emoji: "🦀",
      name: "1. parti",
      dateRange: "25. juni - 5. juli",
    },
    {
      emoji: "☀️",
      name: "2. parti",
      dateRange: "12. juli - 22. juli",
    },
    {
      emoji: "🐚",
      name: "3. parti",
      dateRange: "29. juli - 8. august",
    },
  ],
};

export default siteConfig;
