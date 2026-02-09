import { draftMode } from 'next/headers'
import { SanityLive } from '@/sanity/lib/live'
import "@/app/globals.css";
import { Header } from '@/components/Header';
import { DisableDraftMode } from '@/components/DisableDraftMode';
import { VisualEditing } from 'next-sanity/visual-editing'

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="min-h-screen flex flex-col bg-white">
        <Header />
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
              <DisableDraftMode />
              <VisualEditing />
          </>
        )}
    </section>
  )
}