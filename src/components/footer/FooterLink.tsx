"use client";
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"

export interface FooterLinkProps {
  href: string
  label: string
};

export function FooterLink(props: FooterLinkProps) {

  return (
    <Link href={props.href} className={cn(buttonVariants({ variant: "link" }), "text-left p-0")}>{props.label}</Link>
  )
}
