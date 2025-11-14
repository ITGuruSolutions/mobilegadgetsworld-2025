import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { assets } from "@/assets/assets";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "MobileGadgetsWorld - Shop smarter",
    description: "MobileGadgetsWorld - Shop smarter",
    icons: {
        icon: [
            { url: "/app/favicon.ico", sizes: "any" },
            { url: "/assets/icon.png", type: "image/png", sizes: "32x32" }
        ],
        shortcut: "/app/favicon.ico",
        apple: "/assets/icon.png",
    },
};

export default function RootLayout({ children }) {
    const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    return publishableKey ? (
        <ClerkProvider publishableKey={publishableKey}>
            <html lang="en">
                <body className={`${outfit.className} antialiased`}>
                    <StoreProvider>
                        <Toaster />
                        {children}
                    </StoreProvider>
                </body>
            </html>
        </ClerkProvider>
    ) : (
        <html lang="en">
            <body className={`${outfit.className} antialiased`}>
                <StoreProvider>
                    <Toaster />
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}
