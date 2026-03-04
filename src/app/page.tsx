import Link from "next/link";
import MainStyles from "./page.module.css";
import Feature from "./components/feature/feature";
import { Icon } from "@iconify/react";
import Cards from "./components/cards-container/cards-container";
import WhySlynxSection from "./components/slynxHeroSection/SlynxLandingHeroSection";
import FaqItem from "./components/faq-component/faq-component";
import { LangCapabilities } from "./components/capabilities/lang-capabilities";
import Testimonials from "./components/testimonial/testimonial";


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
  const [Content, setContent]     = useState<React.FC | null>(null)

  useEffect(() => {
    import(`./docs/content/${activeKey}.mdx`)
      .then((mod) => setContent(() => mod.default))
      .catch(() => setContent(null))
  }, [activeKey])

  const index   = ARTICLES.findIndex((a) => a.key === activeKey)
  const current = ARTICLES[index]
  const prev    = ARTICLES[index - 1]
  const next    = ARTICLES[index + 1]

  const select = (key: string) => {
    setActiveKey(key)
    document.getElementById("docs-main")?.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className={MainStyles.main}>
      <div className={MainStyles.entry}>
        <h1>Slynx</h1>
        <h2>Customizable, Fast, && Efficient </h2>
        <div className={MainStyles.start_now}>
          <Link href="/docs/get-started">Get Started</Link>
        </div>
      </div>
      <div className={MainStyles.lang_specs}>
        <h1>What is Slynx?</h1>
        <div>
          <Feature title="Performatic Language" icon={<Icon icon="material-symbols:speed" width="48" height="48" className={MainStyles.feature_icon} />} >
            Hello world
          </Feature>
          <Feature title="Performatic Language" icon={<Icon icon="material-symbols:speed" width="48" height="48" className={MainStyles.feature_icon} />} >
            Hello world
          </Feature>
          <Feature title="Performatic Language" icon={<Icon icon="material-symbols:speed" width="48" height="48" className={MainStyles.feature_icon} />} >
            Hello world
          </Feature>
        </div>
      </div>
      <div> <Cards /> </div>
      <WhySlynxSection title="Why" brandName="Slynx" description="Bla ble bli blo blu" badges={[]} codeExample="aaa" fileName="main.sx" typingSpeed={300} />
      <LangCapabilities capabilities={[
        { title: "UI mordernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" },
        { title: "UI mordernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" },
        { title: "UI mordernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" },
        { title: "UI mordernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" },
        { title: "UI mordernas", description: "Crie interfaces otimizadas e estilosas com a nossa engine" }
      ]} title="What's possible with" emphasized_text="Slynx" />
      <Testimonials testimonials={[{
        author: 'Owner',
        id: 0,
        role: 'Owner',
        text: "The project is ongoing and yet there's no testimonial"
      }]} />
      <div className={MainStyles.faq_container}>
        <h1 className={MainStyles.faq_title}>Faq</h1>
        <FaqItem question="Is it ready for production" answer="No the language is experimental and has a lot to improve" />
        <FaqItem question="Is it ready for production" answer="No the language is experimental and has a lot to improve" />
        <FaqItem question="Is it ready for production" answer="No the language is experimental and has a lot to improve" />     </div>
    </main>
  );
}
