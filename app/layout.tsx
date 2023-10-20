import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import PageLayout from "@/app/components/Layouts/PageLayout/PageLayout";
import RootLayoutBowling from "@/app/components/Layouts/RootLayout/RootLayout";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'FRIENDS Bowling',
    description: 'Friends Bowling, You are gonna love it',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
        <body>
        <RootLayoutBowling>
                <PageLayout>
                    {children}
                </PageLayout>
        </RootLayoutBowling>
        </body>
        </html>
    );
}
