import { NEWS_IMAGES } from "../constants/News.constants";

export const newsItems = [
  {
    id: "news-1",
    type: "main",
    image: NEWS_IMAGES.news1,
    category: "News Update",
    title:
      'Hash Malik at a cloud partner panel discussion — “Succeeding with IBM”',
    href: "/coming-soon",
    readMoreHref: "/coming-soon",
  },

  {
    id: "news-2",
    type: "large",
    image: NEWS_IMAGES.news2,
    category: "IoT Summit",
    title: "SPS makes a push into IoT through Mars rover demo",
    href: "/coming-soon",
    readMoreHref: "/coming-soon",
    ariaLabel: "Read more about SPS IoT Mars rover demo",
  },

  {
    id: "news-3",
    type: "small",
    image: NEWS_IMAGES.news3,
    category: "Expert Opinion",
    title: "How To Secure & Monitor Your AI Models",
    href: "/coming-soon",
    readMoreHref: "/coming-soon",
    ariaLabel: "Read more about securing and monitoring AI models",
  },

  {
    id: "news-4",
    type: "empty",
    title: "More updates coming soon...",
    href: "/coming-soon",
    ariaLabel: "View more news updates",
  },
];