import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import "../styles/base.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            <body>
                <div className="flex flex-col min-h-screen antialiased">
                    {children}
                </div>
            </body>
        </html>
    );
}
