import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { resources, getResourceBySlug } from "@/data/resources";
import { ResourcePage } from "@/components/ResourcePage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};

  return {
    title: `${resource.title} | Manas Setu`,
    description: resource.subtitle,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  return <ResourcePage resource={resource} />;
}
