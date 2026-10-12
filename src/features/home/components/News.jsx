import { newsItems } from "../data/NewsData";

import {
  NEWS_TITLE,
  NEWS_VIEW_ALL_HREF,
} from "../constants/News.constants";

export default function News() {
  const news1 = newsItems.find((item) => item.id === "news-1");
  const news2 = newsItems.find((item) => item.id === "news-2");
  const news3 = newsItems.find((item) => item.id === "news-3");
  const news4 = newsItems.find((item) => item.id === "news-4");

  return (
    <>
      <section className="2xxl:py-25 xl:py-17.5 md:py-10 py-7.5">
        <div className="container">
          <div className="mb-7.5 row items-end">
            <div className="lg:w-7/12 md:w-2/3">
              <h2 className="xl:text-4xxl sm:text-3xxl text-2xxl font-bold capitalize mb-0">
                {NEWS_TITLE}
              </h2>
            </div>

            <div className="lg:w-5/12 md:w-1/3 md:text-end hidden md:block">
              <a
                href={NEWS_VIEW_ALL_HREF}
                className="btn btn-icon btn-primary btn-shadow group"
              >
                View All

                <span className="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center -my-2.75 md:-mr-5 ml-3 -mr-4 max-sm:hidden">
                  <i className="feather icon-arrow-right group-hover:animate-toRightFromLeft"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="row g-20">
            {/* MAIN BIG LEFT BLOG (NEWS 1) */}
            <div className="lg:w-1/3 w-full">
              <div
                className="relative overflow-hidden sm:rounded-3xl rounded-xxl xl:h-137.5 h-105 bg-light bg-cover"
                style={{
                  backgroundImage: `url('${news1.image}')`,
                }}
              >
                <div className="relative !pt-17.5 xl:p-7.5 p-5 size-full flex flex-col z-1">
                  <div className="max-w-1/2">
                    <div
                      className="py-1.25 px-3.75 absolute top-7.5 left-7.5 z-1  
                      text-secondary bg-white font-medium text-xs uppercase rounded-5xl"
                    >
                      {news1.category}
                    </div>

                    <h3 className="xl:text-2xl text-xl mb-0 text-white">
                      <a href={news1.href}>{news1.title}</a>
                    </h3>
                  </div>

                  <div className="flex items-end gap-7.5 flex-1 justify-between">
                    <a
                      href={news1.readMoreHref}
                      className="btn btn-icon btn-lg btn-primary"
                    >
                      Read More

                      <span className="size-11 min-w-11 bg-white rounded-2lg text-heading inline-flex items-center justify-center ml-3">
                        <i className="feather icon-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* LARGE CENTER BLOG (NEWS 2) */}
            <div className="xl:w-5/12 lg:w-2/3 w-full">
              <div
                className="relative overflow-hidden sm:rounded-3xl rounded-xxl xl:h-137.5 h-105 bg-light bg-cover  
                after:absolute after:left-0 after:size-full after:top-0 after:bg-linear-(--card-2-gradient)"
                style={{
                  backgroundImage: `url('${news2.image}')`,
                }}
              >
                <div className="relative !pt-17.5 xl:p-7.5 p-5 size-full flex flex-col z-1">
                  <div
                    className="py-1.25 px-3.75 absolute top-7.5 left-7.5 z-1  
                    text-secondary bg-white font-medium text-xs uppercase rounded-5xl"
                  >
                    {news2.category}
                  </div>

                  <div className="flex items-end gap-7.5 flex-1 justify-between">
                    <h3 className="xl:text-2xl text-xl mb-0 text-white">
                      <a href={news2.href}>{news2.title}</a>
                    </h3>

                    <a
                      href={news2.readMoreHref}
                      aria-label={news2.ariaLabel}
                      className="btn btn-square btn-white !rounded-full group"
                    >
                      <i className="feather icon-arrow-up-right group-hover:animate-toTopRight"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SMALL TWO BLOGS (NEWS 3 + CUSTOM EMPTY) */}
            <div className="xl:w-1/4 lg:w-full">
              <div className="row g-20">
                {/* SMALL CARD (NEWS 3) */}
                <div className="xl:w-full md:w-1/2 w-full">
                  <div
                    className="relative overflow-hidden sm:rounded-3xl rounded-xxl h-66.25 bg-light bg-cover  
                    after:absolute after:left-0 after:size-full after:top-0 after:bg-linear-(--card-2-gradient)"
                    style={{
                      backgroundImage: `url('${news3.image}')`,
                    }}
                  >
                    <div className="relative !pt-17.5 xl:p-7.5 p-5 size-full flex flex-col z-1">
                      <div
                        className="py-1.25 px-3.75 absolute top-7.5 left-7.5 z-1  
                        text-secondary bg-white font-medium text-xs uppercase rounded-5xl"
                      >
                        {news3.category}
                      </div>

                      <div className="flex items-end gap-7.5 flex-1 justify-between">
                        <h3 className="text-xl mb-0 text-white">
                          <a href={news3.href}>{news3.title}</a>
                        </h3>

                        <a
                          href={news3.readMoreHref}
                          aria-label={news3.ariaLabel}
                          className="btn btn-square btn-white !rounded-full group"
                        >
                          <i className="feather icon-arrow-up-right group-hover:animate-toTopRight"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SMALL EMPTY BLOG CARD */}
                <div className="xl:w-full md:w-1/2 w-full">
                  <div className="relative overflow-hidden sm:rounded-3xl rounded-xxl h-66.25 bg-secondary">
                    <div className="relative !pt-17.5 xl:p-7.5 p-5 size-full flex flex-col z-1 text-white">
                      <h3 className="text-xl mb-0 text-white">
                        <a href={news4.href}>{news4.title}</a>
                      </h3>

                      <div className="flex items-end gap-7.5 flex-1 justify-between ms-auto">
                        <a
                          href={news4.href}
                          aria-label={news4.ariaLabel}
                          className="btn btn-square btn-white !rounded-full group"
                        >
                          <i className="feather icon-arrow-up-right group-hover:animate-toTopRight"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}