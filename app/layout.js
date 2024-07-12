import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"

export const metadata = {
  title: "SDR XLR8TR",
  description: "Sell Faster!",
};
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}