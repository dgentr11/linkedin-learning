import { PageBuilder } from "@/components/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });

  if (!page?.homePage) {
    return {}
  }

  const metadata: Metadata = {
    metadataBase: new URL("https://acme.com"),
    title: page.homePage.seo.title,
    description: page.homePage.seo.description,
  };

  if (page.homePage.seo.image) {
    metadata.openGraph = {
      images: {
        url: urlFor(page.homePage.seo.image).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      },
    };
  }

  if (page.homePage.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;  
}


export default async function Page() {
  const { data: page } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });

  if (!page?.homePage) {
    notFound();
  }

  return page?.homePage?.content ? (
    
    <PageBuilder documentId={page?.homePage._id} documentType={page?.homePage._type} content={page?.homePage.content} />
  ) : null;
}