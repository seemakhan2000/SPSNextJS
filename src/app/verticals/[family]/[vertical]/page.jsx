import { notFound } from "next/navigation";

import VerticalPage from "@/features/verticals/components/VerticalPage";

import {
  getVertical,
  getVerticalStaticParams,
} from "@/features/verticals/data/verticals";

import { verticalMetadata } from "@/features/verticals/seo/verticalsMetadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getVerticalStaticParams();
}

export async function generateMetadata({ params }) {
  const { family, vertical } = await params;

  const page = getVertical(family, vertical);

  if (!page) {
    return {
      title: "Verticals",
    };
  }

  return verticalMetadata(page);
}

export default async function VerticalRoutePage({ params }) {
  const { family, vertical } = await params;

  const page = getVertical(family, vertical);

  if (!page) {
    notFound();
  }

  return <VerticalPage page={page} />;
}