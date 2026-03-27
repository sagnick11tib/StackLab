import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFrame } from "@/components/layout/site-frame";
import { marketingMetadata } from "@/lib/metadata/site";

export const metadata: Metadata = marketingMetadata;

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <SiteFrame>{children}</SiteFrame>;
}
