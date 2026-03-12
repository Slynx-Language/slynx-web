import { ReactNode } from "react"
import Image from "next/image"
import styles from "./feature.module.css"

type FeatureProps = {
  title: string,
  icon: ReactNode,
  children: ReactNode
}

export default function Feature({
  title,
  icon,
  children
}: FeatureProps) {
  return (
    <div className={styles.feature}>
      <div>
        {icon}
      </div>

      <h3 className={styles.featureTitle}>{title}</h3>

      <div className={styles.featureText}>{children}</div>
    </div>
  )
}
