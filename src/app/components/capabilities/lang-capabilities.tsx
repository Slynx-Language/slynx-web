import CapabilitiesStyles from "./lang-capabilities.module.css";

export interface CapabilityContent {
  title: string;
  description: string;
}

export interface CapabilityProp extends CapabilityContent {
  index: number,
  quantity: number
}

export interface CapabilitiesProps {
  title: string,
  emphasized_text: string,
  capabilities: CapabilityContent[]
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, i) => start + i);
}

function Capability(capability: CapabilityProp) {
  return <div className={CapabilitiesStyles.capability}>
    <div>
      <h1>{capability.title}</h1>
      <p>{capability.description}</p>
    </div>
    <div className={CapabilitiesStyles.traces}>{
      range(0, capability.quantity!).map(v => <div className={v === capability.index ? CapabilitiesStyles.current_capability_trace : CapabilitiesStyles.capability_trace}></div>)
    }</div>
  </div>
}

export function LangCapabilities(props: CapabilitiesProps) {
  return <div className={CapabilitiesStyles.capabilities_container}>
    <h1 className={CapabilitiesStyles.title}>{props.title} <span className={CapabilitiesStyles.enphasized}>{props.emphasized_text}</span>?</h1>
    <div className={CapabilitiesStyles.container}>
      {props.capabilities.map(
        (p, i) => Capability({ ...p, index: i, quantity: props.capabilities.length })
      )}
    </div>
  </ div>
}
