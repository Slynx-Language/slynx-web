import Image from "next/image"
import FooterStyles from "./Footer.module.css"
import { FooterLink } from "./FooterLink"

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
    <div className="w-full h-full flex flex-col items-center justify-center pt-5">
      <div className="md:w-[90%] w-full h-full flex flex-col md:flex-row items-start justify-center md:justify-between pt-5 gap-8">
        <div className="flex flex-col gap-4 min-w-36">
          <div className="flex items-center gap-2">
            <Image
              src="/lynx-64px-safe.svg"
              alt="Slynx logo"
              width={80}
              height={80}
            />
            <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Slynx</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold md:text-lg lg:text-2xl">Why Slynx</h1>
          <FooterLink href="/use-case" label="Use Cases"></FooterLink>
          <FooterLink href="/case-studies" label="Case Studies"></FooterLink>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold md:text-lg lg:text-2xl">Get Started</h1>
          <FooterLink href="/download" label="Download"></FooterLink>
          <FooterLink href="/docs" label="Docs"></FooterLink>
          <FooterLink href="/examples" label="Code Examples"></FooterLink>
          <FooterLink href="/users" label="Help"></FooterLink>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold md:text-lg lg:text-2xl">Packages</h1>
          <FooterLink href="/docs/std" label="Std Library"></FooterLink>
          <FooterLink href="/package-manager" label="Registry"></FooterLink>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold md:text-lg lg:text-2xl">Social</h1>
          <FooterLink href="https://github.com/cykna/slynx" label="Github"></FooterLink>
          <FooterLink href="https://discord.com/" label="Discord"></FooterLink>
          <FooterLink href="https://x.com/" label="Twitter"></FooterLink>
        </div>
      </div>
      <div className="w-full border border-black"></div>
      <div className="h-full flex items-center pt-6 pb-6">Maintained by Slynx Team</div>
    </div>
  )
}

