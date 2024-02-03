import { Button } from '@/components/shared/buttons';
import Image from 'next/image';
import Me from '@/public/images/me.png';

const Page = () => {
    return (
        <main className="flex flex-col items-center">
            <section className="container min-h-[900px] grid 2xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 px-2 2xl:gap-0 lg:gap-0 gap-16">
                <div className="flex flex-col justify-center gap-4">
                    <p className="uppercase font-bold tracking-widest text-primary 2xl:text-start lg:text-start md:text-start text-center">
                        I am
                    </p>
                    <span className="2xl:text-[60px] lg:text-[60px] md:text-[60px] text-[50px] 2xl:text-start lg:text-start md:text-start text-center leading-[60px] font-extrabold">
                        <p>Proficient in modern</p>
                        <p className="text-primary">web technologies</p>
                    </span>
                    <div className="flex items-center gap-4 2xl:justify-start lg:justify-start md:justify-start justify-center">
                        <Button text="Hire me" />
                        <Button type="outlined" text="Download CV" />
                    </div>
                    <p className="tracking-widest mt-8 w-full 2xl:w-3/4 lg:w-3/4 2xl:text-start lg:text-start md:text-start text-center">
                        Building Bridges, Crafting Experiences: Your Full-Stack Developer for Seamless Web Solutions.
                    </p>
                </div>
                <div className="flex items-center justify-center 2xl:order-last lg:order-last order-first">
                    <Image src={Me} alt="me" />
                </div>
            </section>
        </main>
    );
};

export default Page;
