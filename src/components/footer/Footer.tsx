import Link from "next/link";
import FooterStyles from "./Footer.module.css";


export function SlynxLogo() {
  return <div></div>
}

/**
 * Creates the footer of the landing page. According to the figma design at `https://www.figma.com/design/Px7bugd5SwPJoVAhVcHhxf/Slynx?node-id=0-1&t=WHAHXM9qxGcr0igM-1`
 * its got links to usecases, communities, tutorials, and packages.
 * This component depends on the following css variables:
 *   `--footer-padding`: The padding of the footer, which depends on `--frame-padding`
 *   `--foreground`: The color of the titles of each section
 *   `--secondary-base-color`: The color of the title of the footer
 *   `--primary-base-color`: The color of the anchors when hovering them
 * This component also redirects to the provided routes: `/use-case`, `/case-studies`, `/download`, `/docs`, `/examples`, `/users`, `/docs/std`,
 * the link to the future package manager, the link of the repository, the discord server, and the twitter of the language
*/
export function Footer() {
  return (
    <div className={FooterStyles.outer}>
      <div className={FooterStyles.footer}>
        <div>
          <div>
            <SlynxLogo />
            <h1 className={FooterStyles.footer_title}>Slynx</h1>
          </div>
        </div>
        <div>
          <h1>Why Slynx</h1>
          <Link href="/use-case">Use Cases</Link>
          <Link href="/case-studies">Case Studies</Link>
        </div>
        <div>
          <h1>Get Started</h1>
          <Link href="/download">Download</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/examples">Code Examples</Link>
          <Link href="/users">Help</Link>
        </div>
        <div>
          <h1>Packages</h1>
          <Link href="/docs/std">Std Library</Link>
          <Link href="/package-manager">Registry</Link>
        </div>
        <div>
          <h1>Social</h1>
          <Link href="https://github.com/cykna/slynx">Github</Link>
          <Link href="https://discord.com/">Discord</Link>
          <Link href="https://x.com/">Twitter</Link>
        </div>
      </div>
      <div className={FooterStyles.divider}></div>
      <div className={FooterStyles.end_of_page}>Maintained by Slynx Team</div>
    </div>
  )
}
