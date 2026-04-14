import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <Card className="max-w-[320px] md:max-w-275 mx-auto text-left gap-2 md:gap-0 rounded-none bg-transparent ring-0 p-0">
      <CardHeader className="p-0 flex flex-col items-start gap-4">
        <div>
          {icon}
        </div>
        <CardTitle className="w-full max-w-full md:max-w-105 font-bold text-[clamp(1.1rem,3.2vw,1.4rem)]">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 mt-2 w-full max-w-full md:max-w-105 text-[clamp(0.9rem,3vw,1.05rem)] text-muted-foreground leading-relaxed wrap-break-word">
        {children}
      </CardContent>
    </Card>
  )
}
