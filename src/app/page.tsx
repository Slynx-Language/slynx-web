"use client";

import Link from "next/link";
import MainStyles from "./page.module.css";
import Feature from "../components/feature/feature";
import { Icon } from "@iconify/react";
import Cards from "../components/cards-container/cards-container";
import WhySlynxContainer from "../components/slynxHeroSection/WhySlynxContainer";
import FaqItem from "../components/faq-component/faq-component";
import { LangCapabilities } from "../components/capabilities/lang-capabilities";
import Testimonials from "../components/testimonial/testimonial";
import { useLang } from "./i18n/LangContext";

export default function Home() {
  const { t } = useLang()

  return (
    <main className={MainStyles.main}>
      <div className={MainStyles.entry}>
        <h1>Slynx</h1>
        <h2>{t.hero.title}</h2>
        <div className={MainStyles.start_now}>
          <Link href="/docs/get-started" className={MainStyles.start_now_link}>
            {t.hero.getStarted}
            <Icon icon="material-symbols:arrow-forward" className={MainStyles.arrow_icon} />
          </Link>
        </div>
      </div>

      <div className={MainStyles.lang_specs}>
        <h1>{t.whatIs.title}</h1>
        <div>
          <Feature
            title={t.whatIs.performance.title}
            icon={<Icon icon="material-symbols:speed" className={MainStyles.feature_icon} />}
          >
            {t.whatIs.performance.description}
          </Feature>
          <Feature
            title={t.whatIs.trust.title}
            icon={<Icon icon="ant-design:safety-outlined" className={MainStyles.feature_icon} />}
          >
            {t.whatIs.trust.description}
          </Feature>
          <Feature
            title={t.whatIs.safety.title}
            icon={<Icon icon="material-symbols:security" className={MainStyles.feature_icon} />}
          >
            {t.whatIs.safety.description}
          </Feature>
        </div>
      </div>

      <div><Cards /></div>

      <WhySlynxContainer />

      <LangCapabilities
        title={t.capabilities.title}
        emphasized_text="Slynx"
        capabilities={t.capabilities.items}
      />

      <Testimonials
        title={t.testimonials.title}
        subtitle={t.testimonials.subtitle}
        testimonials={[{
          author: 'Owner',
          id: 0,
          role: 'Owner',
          text: "The project is ongoing and yet there's no testimonial"
        }]}
      />

      <div className={MainStyles.faq_container}>
        <h1 className={MainStyles.faq_title}>{t.faq.title}</h1>
        {t.faq.items.map((item, i) => (
          <FaqItem key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </main>
  )
}
