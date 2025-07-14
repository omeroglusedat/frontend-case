'use client';

import HomePage from "@/app/[locale]/page";
import { useSearchParams } from "next/navigation";
import React from "react";


export default function HomePageClient({ children, locale }: { children: React.ReactNode, locale: string }) {
    const params = useSearchParams();
    const page = params.get('p') || 1;

    return <HomePage pageNumber={Number(page)} locale={locale}>
        {children}
    </HomePage>
}