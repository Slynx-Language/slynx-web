import PageFrameStyles from "./PageFrame.module.css";

export interface PageFrameProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

/**
 * Creates the frame of the Page.
 * This component is intendeed to be used on the top level.
 * The provided `header` is the header content that will appear on the header, that means, with the top of the frame
 * and the provided `footer` on the bottom of the frame.
 * The provided children are placed inside the frame.
 * This component uses the following CSS variables:
 *   `--frame-width`: To calculate the width and the padding of the frame
 *   `--frame-round`: To calculate how much roundness the frame's got
 *   `--foreground`: For the color of the frame itself
 *   `--background`: For the color of the contents inside the frame
 *   `--frame-padding`: The variable to apply the frame
*/
export default function PageFrame(props: PageFrameProps) {
  return (
    <div className={PageFrameStyles.frame}>
      <div className={PageFrameStyles.header}>
        {props.header}
      </div>
      <div className={PageFrameStyles.inner}>
        {props.children}
      </div>
      <div>
        {props.footer}
      </div>
    </div>

  )
}
