import { cn } from "@/lib/utils"

export interface CapabilityContent {
  title: string
  description: string
}

export interface CapabilitiesProps {
  title: string
  emphasized_text: string
  capabilities: CapabilityContent[]
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, i) => start + i)
}

function Capability({ title, description, index, quantity }: CapabilityContent & { index: number; quantity: number }) {
  return (
    <div className="group text-[var(--commum-text)] rounded-[2rem] border-2 border-l-[0.666rem] border-[var(--primary-base-color)] bg-[#131317] w-full text-[clamp(1rem,4vw,1.4rem)] flex flex-col gap-32 p-8 transition-colors duration-500 hover:border-[var(--hover-color)]">
      <div>
        <h1 className="text-white font-extrabold break-words">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="mt-auto flex flex-row justify-center gap-4">
        {range(0, quantity).map((v, i) => (
          <div
            key={i}
            className={cn(
              "h-4 rounded-[1.25rem] transition-colors duration-300",
              v === index
                ? "w-full bg-[var(--primary-base-color)] group-hover:bg-[var(--hover-color)]"
                : "w-1/2 bg-foreground"
            )}
          />
        ))}
      </div>
    </div>
  )
}

export function LangCapabilities({ title, emphasized_text, capabilities }: CapabilitiesProps) {
  return (
    <div className="flex flex-col gap-8 items-start bg-[#0B0B0B] w-full px-6 py-[60px] rounded-[20px] max-md:px-4 max-md:py-10 max-md:gap-6 max-md:items-center">
      <h1 className="text-[var(--title-color)] text-[clamp(2rem,6vw,3rem)] max-md:text-center max-md:text-[clamp(1.6rem,5vw,2.2rem)]">
        {title} <span className="text-[var(--hover-color)]">{emphasized_text}</span>?
      </h1>
      <div className="flex gap-8 max-md:flex-col max-md:gap-4 max-md:w-full">
        {capabilities.map((p, i) => (
          <Capability key={p.title} index={i} quantity={capabilities.length} title={p.title} description={p.description} />
        ))}
      </div>
    </div>
  )
}
