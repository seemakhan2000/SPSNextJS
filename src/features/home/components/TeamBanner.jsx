import { teamBannerData } from "../data/TeamBannerData";
import { TEAM_BANNER_IMAGE } from "../constants/TeamBanner.constants";

export default function TeamBanner() {
  return (
    <>
      {/* <section
              className="lg:pt-20 lg:pb-10 pt-12.5 pb-5 bg-secondary bg-blend-multiply bg-fixed bg-no-repeat bg-position-[right_center] bg-cover bg-[url(/assets/images/background/bg2.webp)]">
              <div className="text-center container">
                  <h3 className="text-white text-lg lg:text-xl font-bold">We have an award-winning team that includes
                      IBM-certified inventors and champions who have won multiple worldwide competitions.</h3>
                  <p className="text-white text-sm lg:text-lg mb-10">
                      As an enterprise-class innovator and solution creator with expertise across all phases of product
                      design, development, deployment, security, operations, monitoring, and support, we have been helping our
                      clients build, deploy and secure applications. Our development, quality, cybersecurity, training,
                      operations, monitoring, and support teams work in tandem to create high-performance, secure, reliable,
                      scalable, and manageable systems.
                  </p>
              </div>
          </section> */}

      <section className="relative lg:pt-20 lg:pb-10 pt-12.5 pb-5 bg-secondary min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={TEAM_BANNER_IMAGE}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="relative container mx-auto text-center z-10">
          <h3 className="text-white text-lg lg:text-xl font-bold mb-4">
            {teamBannerData.title}
          </h3>

          <p className="text-white text-sm lg:text-lg mb-10">
            {teamBannerData.description}
          </p>
        </div>
      </section>
    </>
  );
}