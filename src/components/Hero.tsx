import { Button } from './shared/buttons';
import Image from 'next/image';
import { Me } from '@/public/images';

const Hero = () => {
    return (
        <div className="w-full">
            <section className="container mx-auto min-h-[900px] grid 2xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 sm:px-8 xs:px-4 2xl:gap-0 lg:gap-0 md:gap-16">
                <section className="flex flex-col justify-center gap-4 py-14">
                    <p className="uppercase font-bold tracking-widest text-primary 2xl:text-start lg:text-start md:text-start text-center">
                        I am
                    </p>
                    <p className="2xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[50px] text-[40px] md:text-start text-center md:leading-[60px] sm:leading-[50px] xs:leading-[50px] font-extrabold">
                        Proficient in modern <span className="text-primary">web technologies</span>
                    </p>
                    <section className="items-center gap-4 mt-4 md:justify-start sm:justify-center xs:justify-center md:flex sm:flex-wrap xs:flex-wrap md:w-full sm:w-[180px] xs:w-[180px] sm:mx-auto xs:mx-auto">
                        <Button className="md:w-min sm:w-full xs:w-full text-nowrap mb-4" text="Hire me" />
                        <Button className="md:w-min sm:w-full xs:w-full text-nowrap mb-4" type="outlined" text="Download CV" />
                    </section>
                    <p className="tracking-widest mt-4 w-full 2xl:w-3/4 lg:w-3/4 2xl:text-start lg:text-start md:text-start text-center">
                        Your Full-Stack Developer for Seamless Web Solutions.
                    </p>
                </section>
                <section className="flex items-center justify-center 2xl:order-last lg:order-last order-first">
                    <Image src={Me} alt="me" />
                </section>
            </section>
        </div>
    );
};

export default Hero;
