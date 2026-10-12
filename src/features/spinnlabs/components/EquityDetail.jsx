import VideoPlay from "@/features/products/components/VideoPlay";
import { equityPage } from "../data/spinnlabs";

function EquityCopy({ title, kicker, paragraphs }) {
  return (
    <div>
      <h2 className="xl:text-xxl sm:text-3xxl text-2xxl font-bold leading-[1.3] mb-2.5">
        {title}
      </h2>
      {kicker ? (
        <p className="sm:text-lg text-base font-medium mb-2.5">{kicker}</p>
      ) : null}
      {paragraphs.map((text) => (
        <p
          key={text}
          className="sm:text-lg text-base font-light leading-[1.7] text-bodycolor mb-2.5 last:mb-0"
        >
          {text}
        </p>
      ))}
    </div>
  );
}

function EquityMedia({ block, video }) {
  if (block.media === "video") {
    return (
      <div className="w-full min-h-50 rounded-2xl overflow-hidden aspect-video">
        <VideoPlay
          src={video.src}
          poster={video.poster}
          label={video.label}
          variant="stacked"
        />
      </div>
    );
  }

  if (!block.image) return null;

  return (
    <div className="w-full min-h-50 rounded-2xl overflow-hidden aspect-video">
      <img
        src={block.image}
        alt={block.imageAlt || ""}
        loading="lazy"
        decoding="async"
        className="size-full object-cover rounded-2xl"
      />
    </div>
  );
}

function CopyMediaBlock({ block, video }) {
  const mediaFirst = block.mediaSide === "left";
  const media = <EquityMedia block={block} video={video} />;
  const copy = (
    <EquityCopy
      title={block.title}
      kicker={block.kicker}
      paragraphs={block.paragraphs}
    />
  );

  return (
    <div className="row items-center">
      {mediaFirst ? (
        <>
          <div className="lg:w-1/3 w-full mb-7.5 lg:mb-0">{media}</div>
          <div className="lg:w-2/3 w-full lg:pl-7.5">{copy}</div>
        </>
      ) : (
        <>
          <div className="lg:w-2/3 w-full mb-7.5 lg:mb-0 lg:pr-7.5">{copy}</div>
          <div className="lg:w-1/3 w-full">{media}</div>
        </>
      )}
    </div>
  );
}

function SplitBlock({ block }) {
  return (
    <div className="row">
      {block.columns.map((column) => (
        <div key={column.title} className="lg:w-1/2 w-full mb-7.5 last:mb-0 lg:mb-0">
          <EquityCopy title={column.title} paragraphs={column.paragraphs} />
        </div>
      ))}
    </div>
  );
}

export default function EquityDetail() {
  const { video, blocks } = equityPage;

  return (
    <>
      {blocks.map((block, index) => (
        <section
          key={block.id}
          className={`lg:py-17.5 py-10 ${index % 2 === 0 ? "bg-white" : "bg-light"}`}
        >
          <div className="container relative z-1">
            {block.layout === "split" ? (
              <SplitBlock block={block} />
            ) : (
              <CopyMediaBlock block={block} video={video} />
            )}
          </div>
        </section>
      ))}
    </>
  );
}
