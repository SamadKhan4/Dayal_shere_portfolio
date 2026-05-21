import React from "react";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { seoProjects, services, socialAccounts } from "../data/portfolioData";
import analyticsImageOne from "../assets/analytics.jpeg";
import analyticsImageTwo from "../assets/analytics1.jpeg";
import analyticsImageThree from "../assets/analytics2.jpeg";
import analyticsImageFour from "../assets/analytics3.jpeg";
import emailImageOne from "../assets/email1.jpeg";
import emailImageTwo from "../assets/email2.jpeg";
import ecommerceImageOne from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/ecommerce (1).jpeg";
import ecommerceImageTwo from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/ecommerce (2).jpeg";
import googleAdsImageOne from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/google (1).jpeg";
import googleAdsImageTwo from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/google (2).jpeg";
import googleAdsImageThree from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/google (3).jpeg";
import metaAdsImageOne from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/meta (1).jpeg";
import metaAdsImageTwo from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/meta (2).jpeg";
import metaAdsImageThree from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/meta (3).jpeg";
import metaAdsImageFour from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/meta (4).jpeg";
import metaAdsImageFive from "../assets/WhatsApp Unknown 2026-05-19 at 4.58.04 PM/meta(4).jpeg";
import whatsappMarketingImageOne from "../assets/watsapp1.jpeg";
import whatsappMarketingImageTwo from "../assets/watsapp2.jpeg";
import whatsappMarketingImageThree from "../assets/watsapp3.jpeg";
import whatsappMarketingImageFour from "../assets/watsapp4.jpeg";
import whatsappMarketingImageFive from "../assets/watsapp5.jpeg";
import whatsappMarketingImageSix from "../assets/watsapp6.jpeg";
import whatsappMarketingImageSeven from "../assets/watsapp7.jpeg";

const whatsappCampaignUrl = "https://zcmp.in/GgI4?m=0";

const makeGalleryItems = (modules, altPrefix) =>
  Object.entries(modules)
    .sort(([firstPath], [secondPath]) => {
      const firstNumber = Number(firstPath.match(/\((\d+)\)/)?.[1] ?? 0);
      const secondNumber = Number(secondPath.match(/\((\d+)\)/)?.[1] ?? 0);

      return firstNumber - secondNumber;
    })
    .map(([, module], index) => ({
      src: module.default,
      alt: `${altPrefix} ${index + 1}`,
    }));

const graphicDesignImages = makeGalleryItems(
  import.meta.glob("../assets/Graphics & Youtube video/Graphics (*.jpeg", { eager: true }),
  "Graphic design sample",
);

const youtubeImages = makeGalleryItems(
  import.meta.glob("../assets/Graphics & Youtube video/youtube (*.jpeg", { eager: true }),
  "YouTube thumbnail sample",
);

const youtubeVideos = makeGalleryItems(
  import.meta.glob("../assets/Graphics & Youtube video/video (*.mp4", { eager: true }),
  "YouTube video sample",
);

const analyticsImages = [
  {
    src: analyticsImageOne,
    alt: "Analytics report sample one",
  },
  {
    src: analyticsImageTwo,
    alt: "Analytics report sample two",
  },
  {
    src: analyticsImageThree,
    alt: "Analytics report sample three",
  },
  {
    src: analyticsImageFour,
    alt: "Analytics report sample four",
  },
];

const emailMarketingImages = [
  {
    src: emailImageOne,
    alt: "Email marketing sample one",
  },
  {
    src: emailImageTwo,
    alt: "Email marketing sample two",
  },
];

const ecommerceMarketingImages = [
  {
    src: ecommerceImageOne,
    alt: "E-commerce marketing sample one",
  },
  {
    src: ecommerceImageTwo,
    alt: "E-commerce marketing sample two",
  },
];

const paidAdvertisingImages = [
  {
    src: googleAdsImageOne,
    alt: "Google Ads sample one",
  },
  {
    src: googleAdsImageTwo,
    alt: "Google Ads sample two",
  },
  {
    src: googleAdsImageThree,
    alt: "Google Ads sample three",
  },
  {
    src: metaAdsImageOne,
    alt: "Meta Ads sample one",
  },
  {
    src: metaAdsImageTwo,
    alt: "Meta Ads sample two",
  },
  {
    src: metaAdsImageThree,
    alt: "Meta Ads sample three",
  },
  {
    src: metaAdsImageFour,
    alt: "Meta Ads sample four",
  },
  {
    src: metaAdsImageFive,
    alt: "Meta Ads sample five",
  },
];

const whatsappMarketingImages = [
  {
    src: whatsappMarketingImageOne,
    alt: "WhatsApp marketing screenshot one",
  },
  {
    src: whatsappMarketingImageTwo,
    alt: "WhatsApp marketing screenshot two",
  },
  {
    src: whatsappMarketingImageThree,
    alt: "WhatsApp marketing screenshot three",
  },
  {
    src: whatsappMarketingImageFour,
    alt: "WhatsApp marketing screenshot four",
  },
  {
    src: whatsappMarketingImageFive,
    alt: "WhatsApp marketing screenshot five",
  },
  {
    src: whatsappMarketingImageSix,
    alt: "WhatsApp marketing screenshot six",
  },
  {
    src: whatsappMarketingImageSeven,
    alt: "WhatsApp marketing screenshot seven",
  },
];

export default function ServiceDetail({ slug }) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main>
        <Header />
        <section className="service-detail">
          <span>Service</span>
          <h1>Service not found</h1>
          <p>Please go back to the services section and choose a valid service.</p>
          <a className="primary-btn" href="/#services">
            View Services <ChevronRight size={18} />
          </a>
        </section>
        <Footer />
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main>
      <Header />
      <section className="service-detail">
        <a className="back-link" href="/#services">
          Services
        </a>
        <div className="service-detail-grid">
          <div className="service-detail-copy">
            <span>{service.title}</span>
            <Icon size={38} />
            <h1>{service.headline}</h1>
            <p>{service.overview}</p>
            <div className="hero-actions">
              <a className="primary-btn" href="mailto:dayalshere200@gmail.com">
                Start Campaign <ArrowUpRight size={18} />
              </a>
              <a className="secondary-btn" href="/#projects">
                See Work <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <aside className="service-detail-panel">
            <span>What is included</span>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {service.slug === "social-media-marketing" && (
          <div className="service-social-list">
            <span>Social profiles</span>
            <div className="social-grid">
              {socialAccounts.map((account) => (
                <a className="social-card" href={account.url} target="_blank" rel="noreferrer" key={account.handle}>
                  <div>
                    <span>@{account.handle}</span>
                    <h3>{account.name}</h3>
                  </div>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          </div>
        )}

        {service.slug === "seo-growth" && (
          <div className="service-project-list">
            <span>SEO websites and keywords</span>
            <div className="seo-project-grid">
              {seoProjects.map((project) => (
                <article className="seo-project-card" key={project.website}>
                  <div className="seo-project-top">
                    <div>
                      <span>{project.focus}</span>
                      <h3>{project.name}</h3>
                    </div>
                    <a href={project.website} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <div className="seo-tool-list">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <ul className="keyword-list">
                    {project.keywords.map((keyword) => (
                      <li key={keyword}>{keyword}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        )}

        {service.slug === "paid-advertising" && (
          <div className="service-paid-list">
            <span>Paid advertising samples</span>
            <div className="paid-gallery">
              {paidAdvertisingImages.map((image) => (
                <figure className="paid-image-card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        )}

        {service.slug === "email-marketing" && (
          <div className="service-email-list">
            <span>Email marketing samples</span>
            <div className="email-gallery">
              {emailMarketingImages.map((image) => (
                <figure className="email-image-card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        )}

        {service.slug === "analytics-research" && (
          <div className="service-analytics-list">
            <span>Analytics work samples</span>
            <div className="analytics-gallery">
              {analyticsImages.map((image) => (
                <figure className="analytics-image-card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        )}

        {service.slug === "ecommerce-marketing" && (
          <div className="service-ecommerce-list">
            <span>E-commerce marketing samples</span>
            <div className="ecommerce-gallery">
              {ecommerceMarketingImages.map((image) => (
                <figure className="ecommerce-image-card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        )}

        {service.slug === "whatsapp-marketing" && (
          <div className="service-whatsapp-list">
            <span>WhatsApp campaign sample</span>
            <a className="whatsapp-sample-card" href={whatsappCampaignUrl} target="_blank" rel="noreferrer">
              <div>
                <span>Live campaign link</span>
                <h3>WhatsApp Marketing Sample</h3>
                <p>{whatsappCampaignUrl}</p>
              </div>
              <ArrowUpRight size={20} />
            </a>
            <div className="whatsapp-gallery">
              {whatsappMarketingImages.map((image) => (
                <figure className="whatsapp-image-card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        )}

        {service.slug === "video-youtube" && (
          <div className="service-youtube-list">
            <span>YouTube thumbnails</span>
            <div className="youtube-gallery">
              {youtubeImages.map((image) => (
                <figure className="youtube-image-card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>

            <span className="service-subheading">Auto-play video samples</span>
            <div className="video-gallery">
              {youtubeVideos.map((video) => (
                <figure className="video-card" key={video.src}>
                  <video src={video.src} autoPlay muted loop playsInline preload="metadata" aria-label={video.alt} />
                </figure>
              ))}
            </div>
          </div>
        )}

        {service.slug === "graphic-designing" && (
          <div className="service-graphics-list">
            <span>Graphic design samples</span>
            <div className="graphics-gallery">
              {graphicDesignImages.map((image) => (
                <figure className="graphics-image-card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        )}
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
