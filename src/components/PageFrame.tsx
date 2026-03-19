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
        {/* Global background shade effects, ordered top-to-bottom as in design */}
        <img
          src="/ShadeEffect1.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade1}`}
        />
        <img
          src="/ShadeEffect2.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade2}`}
        />
        <img
          src="/ShadeEffect3.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade3}`}
        />
        <img
          src="/ShadeEffect4.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade4}`}
        />
        <img
          src="/ShadeEffect5.svg"
          alt=""
          aria-hidden
          className={`${PageFrameStyles.shadeEffect} ${PageFrameStyles.shade5}`}
        />
        {props.children}
      </div>
      {props.footer}
    </div>
  )
}
