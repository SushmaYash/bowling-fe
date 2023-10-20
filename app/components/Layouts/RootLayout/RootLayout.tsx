'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import React from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {queryClient} from "@/app/config/reactQueryConfig";


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayoutBowling({children}: RootLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools/>
    </QueryClientProvider>)
}
