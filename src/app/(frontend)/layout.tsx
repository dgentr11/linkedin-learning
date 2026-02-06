import { SanityLive } from '@/sanity/lib/live'
import "@/app/globals.css";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <SanityLive />
    </>
  )
}