import Link from 'next/link';
import { UilBars } from '@iconscout/react-unicons';

const Header = () => {
    return (
        <header className="h-[82px]">
            <nav className="container flex items-center justify-between h-full mx-auto px-2">
                <h1 className="text-[24px] font-extrabold">ZEE.</h1>
                <ul className="list-none hidden gap-10 text-[14px] font-semibold uppercase hover-underline-animation 2xl:flex lg:flex">
                    <Link href="#">Home</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Skills</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Projects</Link>
                    <Link href="#">Contact</Link>
                </ul>
                <span className="block 2xl:hidden lg:hidden">
                    <UilBars size="25" color="#000000" />
                </span>
            </nav>
        </header>
    );
};

export default Header;
