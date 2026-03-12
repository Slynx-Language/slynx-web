"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import MainStyles from "./page.module.css";
import Feature from "./components/feature/feature";
import { Icon } from "@iconify/react";
import Cards from "./components/cards-container/cards-container";
import WhySlynxContainer from "./components/slynxHeroSection/WhySlynxContainer";
import FaqItem from "./components/faq-component/faq-component";
import { LangCapabilities } from "./components/capabilities/lang-capabilities";
import Testimonials from "./components/testimonial/testimonial";
import { ARTICLES } from "./docs/articles";

/**
* The component of the main page of slynx. This is idealized to be shown only on /.
* This component can be used to nagivate to `/docs/get-started`
* The component uses the following css variables:
*   `--foreground`: For the subtitle text
*   `--hover-color`: As the primary color, due to its saturation
*   `--primary-base-color-rgb`: For the background of 'get started' button
*/
export default function Home() {
  const [activeKey, setActiveKey] = useState(ARTICLES[0].key)
  const [Content, setContent] = useState<React.FC | null>(null)

  useEffect(() => {
    import(`./docs/content/${activeKey}.mdx`)
      .then((mod) => setContent(() => mod.default))
      .catch(() => setContent(null))
  }, [activeKey])

  const index = ARTICLES.findIndex((a) => a.key === activeKey)
  const current = ARTICLES[index]
  const prev = ARTICLES[index - 1]
  const next = ARTICLES[index + 1]

  const select = (key: string) => {
    setActiveKey(key)
    document.getElementById("docs-main")?.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className={MainStyles.main}>
      <div className={MainStyles.entry}>
        <h1>Slynx</h1>
        <h2>Customizable, Fast, & Efficient </h2>
        <div className={MainStyles.start_now}>
          <Link href="/docs/get-started">Get Started {<Icon icon="material-symbols:arrow-forward" width="30" height="30" className={MainStyles.arrow_icon} />} </Link>
        </div>
      </div>
      <div className={MainStyles.lang_specs}>
        <h1>What is Slynx?</h1>

        <div>
          <Feature
            title="Performatic Language"
            icon={
              <Icon
                icon="material-symbols:speed"
                width="48"
                height="48"
                className={MainStyles.feature_icon}
              />
            }
          >
            Optimized for modern hardware with lightning-fast execution times and
            zero-cost abstractions.
          </Feature>

          <Feature
            title="A Result You Can Trust"
            icon={
              <Icon
                icon="ant-design:safety-outlined"
                width="48"
                height="48"
                className={MainStyles.feature_icon}
              />
            }
          >
            Deterministic behavior ensures your code runs exactly as expected across
            every environment.
          </Feature>

          <Feature
            title="Safety at Scale"
            icon={
              <Icon
                icon="material-symbols:security"
                width="48"
                height="48"
                className={MainStyles.feature_icon}
              />
            }
          >
            Built-in safety features that catch bugs at compile-time before they
            reach your users.
          </Feature>
        </div>
      </div>
      <div> <Cards /> </div>
      <WhySlynxContainer />
      <LangCapabilities capabilities={[
        { title: "modern UIs", description: "Create buttery smooth 120fps interfaces with our declarative UI engine." },
        { title: "Componentization", description: "Modular architecture designed for massive team collaboration and reuse." },
      ]} title="What's possible with" emphasized_text="Slynx" />
      {/*
      
      The following sections were commented for lack of content

      <Testimonials testimonials={[{
        author: 'Owner',
        id: 0,
        role: 'Owner',
        text: "The project is ongoing and yet there's no testimonial"
      }]} />
      <div className={MainStyles.faq_container}>
        <h1 className={MainStyles.faq_title}>FAQ</h1>
        <FaqItem question="Is it ready for production" answer="No the language is experimental and has a lot to improve" />
        <FaqItem question="Is it ready for production" answer="No the language is experimental and has a lot to improve" />
        <FaqItem question="Is it ready for production" answer="No the language is experimental and has a lot to improve" />     </div> */}
    </main>
  );
}
