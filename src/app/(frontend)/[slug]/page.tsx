import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY } from "@/sanity/lib/queries";
import { PageBuilder } from "@/components/PageBuilder";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

const getPage = async (params: RouteProps["params"]) => sanityFetch({
  query: PAGE_QUERY,
  params: await params,
});

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { data: page } = await getPage(params);

  if (!page) {
    return {}
  }

  const metadata: Metadata = {
    metadataBase: new URL("https://acme.com"),
    title: page.seo.title,
    description: page.seo.description,
  };

  if (page.seo.image) {
    metadata.openGraph = {
      images: {
        url: urlFor(page.seo.image).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      },
    };
  }

  if (page.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
}

export default async function Page({ params }: RouteProps) {
  const { data: page } = await getPage(params);

  if (!page) {
    notFound();
  }

  return page?.content ? (
    <PageBuilder
      documentId={page._id}
      documentType={page._type}
      content={page.content}
    />
  ) : null;
}