"use client"
import { Card } from '@/app/components/card/card'
import Icon from "@/app/components/icon"
import styles from "./cards-container.module.css"
import { useLang } from "@/app/i18n/LangContext"

export default function Cards() {
  const { t } = useLang()
  return (
    <div className={styles.container}>
      <div className={styles.started}>
        <div className={styles.get}>
          <h1>{t.cards.getStarted}</h1>
        </div>
        <h1>{t.cards.started}</h1>
      </div>
      <div className={styles.cards}>
        <Card title={t.cards.handbrook.title} href="#" icon={<Icon icon="material-symbols:book-outline-rounded" width={120} height={120} color="var(--card-icons)" />}>
          {t.cards.handbrook.description} <Icon icon="maki:arrow" />
        </Card>
        <Card title={t.cards.playground.title} href="#" icon={<Icon icon="fe:terminal" width={120} height={120} color="var(--card-icons)" />}>
          {t.cards.playground.description} <Icon icon="maki:arrow" />
        </Card>
        <Card title={t.cards.download.title} href="#" icon={<Icon icon="material-symbols:download" width={120} height={120} color="var(--card-icons)" />}>
          {t.cards.download.description} <Icon icon="maki:arrow" />
        </Card>
      </div>
    </div>
  )
}
