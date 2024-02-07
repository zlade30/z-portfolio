import About from '@/components/About';
import Hero from '@/components/Hero';

const Page = () => {
    return (
        <main className="flex flex-col items-center">
            <Hero />
            <About />
        </main>
    );
};

export default Page;
