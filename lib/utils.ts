import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ConverAmountToMilliunits(amount: number) {
  return Math.round(amount * 1000);
}

export function ConverAmountFromMilliunits(amount: number) {
  return Math.round(amount / 1000);
}
