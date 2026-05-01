export interface PageFrameProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

export default function PageFrame(props: PageFrameProps) {
  return (
    <div className="flex relative flex-col items-stretch w-[calc(100%-var(--frame-width))] bg-foreground rounded-[20px] p-[var(--frame-padding)] overflow-auto">
      <div className="sticky top-0 left-0 w-[calc(100%-var(--frame-width))] flex items-center justify-center">
        {props.header}
      </div>
      <div className="p-[var(--frame-padding)] w-[calc(100%-var(--frame-width))] flex flex-col bg-background rounded-[var(--frame-round)] z-0">
        {props.children}
      </div>
      <div>
        {props.footer}
      </div>
    </div>
  )
}
