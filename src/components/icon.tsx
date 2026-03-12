
import { Icon as Iconify, IconProps } from "@iconify/react";

/**
 * A simple wrapper for the Iconify `Icon` component. Use this to avoid
 * creating desnecessary client components when you just want to use an icon
 * in a server component.
*/
export default function Icon(props: IconProps) {
  return <Iconify { ...props } />
}
