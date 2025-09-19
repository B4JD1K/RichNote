"use client"

import {PageWrapper} from "@/app/page-wrapper/page-wrapper";

export default function Page() {
  return (
    <PageWrapper breadcrumbs={[
      {label: "Dashboard", href: "/dashboard"}
    ]}
    >
      <h1 className="text-7xl font-bold italic items-center">✨RichNote</h1>
    </PageWrapper>
  )
}