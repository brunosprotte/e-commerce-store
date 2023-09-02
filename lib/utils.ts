import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export const formatter = new Intl.NumberFormat("pt-BR", {
  style: 'currency',
  currency: "BRL"
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
