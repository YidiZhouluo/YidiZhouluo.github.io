import { awardItems } from "./awards.js";
import { publicationItems } from "./publications.js";

const normalizeDate = (date) => {
  if (date.length === 7) return `${date}-01`;
  return date;
};

const toRecentAward = (award) => ({
  date: normalizeDate(award.date),
  dateLabel: award.dateLabel,
  type: "获奖",
  title: award.title,
  meta: "大学阶段获奖记录",
  href: "/awards/"
});

const toRecentPublication = (publication) => ({
  date: normalizeDate(publication.date),
  dateLabel: publication.dateLabel,
  type: publication.type,
  title: publication.title,
  meta: publication.meta,
  href: publication.href
});

const allRecentItems = [
  ...publicationItems.map(toRecentPublication),
  ...awardItems.map(toRecentAward)
];

export const getRecentItems = (limit = 5) => (
  [...allRecentItems]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
);
