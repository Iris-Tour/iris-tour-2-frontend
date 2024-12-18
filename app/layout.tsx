import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const degularDisplay = localFont({
    src: "./../fonts/DegularVariable.ttf",
    weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
    title: "Iris Tour",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang="en">
            <body className={`${degularDisplay.className} antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
