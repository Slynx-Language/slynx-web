import PageFrameStyles from "./PageFrame.module.css";

export interface PageFrameProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

export default function PageFrame(props: PageFrameProps) {
  return (
    <div className={PageFrameStyles.frame}>
      <div className={PageFrameStyles.header}>
        {props.header}
      </div>
      <div className={PageFrameStyles.inner}>
        {props.children}
      </div>
      {props.footer}
    </div>
  )
}
