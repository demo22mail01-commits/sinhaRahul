import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openProtocolLink(href: string) {
  if (typeof window === "undefined") return;
  window.location.href = href;
}
