"use client"

import Link from "next/link";
import FooterStyles from "./Footer.module.css";
import { useLang } from "@/app/i18n/LangContext";

export function SlynxLogo() {
  return <div></div>
}

export function Footer() {
  const { t } = useLang()
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
          <h1>{t.footer.whySlynx}</h1>
          <Link href="/use-case">{t.footer.useCases}</Link>
          <Link href="/case-studies">{t.footer.caseStudies}</Link>
        </div>
        <div>
          <h1>{t.footer.getStarted}</h1>
          <Link href="/download">{t.footer.download}</Link>
          <Link href="/docs">{t.footer.docs}</Link>
          <Link href="/examples">{t.footer.codeExamples}</Link>
          <Link href="/users">{t.footer.help}</Link>
        </div>
        <div>
          <h1>{t.footer.packages}</h1>
          <Link href="/docs/std">{t.footer.stdLibrary}</Link>
          <Link href="/package-manager">{t.footer.registry}</Link>
        </div>
        <div>
          <h1>{t.footer.social}</h1>
          <Link href="https://github.com/cykna/slynx">Github</Link>
          <Link href="https://discord.com/">Discord</Link>
          <Link href="https://x.com/">Twitter</Link>
        </div>
      </div>
      <div className={FooterStyles.divider}></div>
      <div className={FooterStyles.end_of_page}>{t.footer.maintainedBy}</div>
    </div>
  )
}
