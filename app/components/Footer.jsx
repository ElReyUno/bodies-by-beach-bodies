import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <nav className="mb-4 md:mb-0">
                    <ul className="flex space-x-4 md:space-x-6">
                        <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
                        <li><Link href="/services" className="hover:text-blue-300">Services</Link></li>
                        <li><Link href="/blog" className="hover:text-blue-300">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
                    </ul>
                </nav>
                <p>© {new Date().getFullYear()} Bodies By Beach Bodies. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;