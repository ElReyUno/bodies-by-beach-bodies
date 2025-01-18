import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import "../styles/base.css";
import Nav from './components/Nav';
import Footer from './components/Footer';

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
            <body className="flex flex-col min-h-screen antialiased">
                <header>
                </header>
                <main className="flex-grow">
                    {children}
                </main>
                <footer>
                </footer>
            </body>
        </html>
    );
}