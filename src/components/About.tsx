import {
    Css3Icon,
    FigmaIcon,
    FirebaseIcon,
    GraduateIcon,
    HeartIcon,
    Html5Icon,
    JavascriptIcon,
    MongoIcon,
    NextJsIcon,
    NodeJsIcon,
    PhotoshopIcon,
    ReactIcon,
    ScssIcon,
    StarIcon,
    TypescriptIcon
} from '@/public/icons';

const About = () => {
    return (
        <div className="w-full bg-primary">
            <section className="container mx-auto grid 2xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 sm:px-8 xs:px-4 2xl:gap-0 lg:gap-0">
                <section className="lg:w-[80%] xs:w-full py-8 lg:order-none sm:order-1 xs:order-1">
                    <p className="font-extrabold text-[40px] text-white">Tech Stack</p>
                    <div className="grid lg:grid-cols-6 md:grid-cols-7 sm:grid-cols-6 xs:grid-cols-4 text-[40px] gap-12 mt-8 md:place-items-start xs:place-items-center">
                        <Html5Icon />
                        <Css3Icon />
                        <ScssIcon />
                        <JavascriptIcon />
                        <TypescriptIcon />
                        <ReactIcon />
                        <NextJsIcon />
                        <FirebaseIcon />
                        <NodeJsIcon />
                        <MongoIcon />
                        <PhotoshopIcon />
                        <FigmaIcon />
                    </div>
                </section>
                <section className="w-full py-8">
                    <p className="font-extrabold text-[40px] text-white">About Me</p>
                    <p className="text-justify tracking-wider text-white mt-8">
                        I am an experienced Web Developer adept in all stages of advanced web development. Bringing forth expertise in
                        design, installation, testing and maintenance of web systems. Equipped with a diverse and promising skill-set. Able
                        to effectively self-manage during independent projects, as well as collaborate in a team setting.
                    </p>
                    <section className="mt-8 flex flex-col gap-2 text-white">
                        <section className="flex items-center gap-4">
                            <p className="font-semibold w-[80px]">Name:</p>
                            <p>Zalde Paquibot</p>
                        </section>
                        <section className="flex gap-4">
                            <p className="font-semibold w-[80px]">Address:</p>
                            <p>Agusan Canyon, Manolo Fortich, Bukidnon, Philippines, 8703</p>
                        </section>
                        <section className="flex items-center gap-4">
                            <p className="font-semibold w-[80px]">Email:</p>
                            <p>zal.dev.30@gmail.com</p>
                        </section>
                        <section className="flex items-center gap-4">
                            <p className="font-semibold w-[80px]">Contact:</p>
                            <p>+639350042268</p>
                        </section>
                    </section>
                    <section className="py-8 mt-4 grid grid-cols-3 gap-8">
                        <section className="flex items-center text-white gap-4 md:flex-row sm:flex-col xs:flex-col">
                            <GraduateIcon className="text-[25px]" />
                            <p>Professional</p>
                        </section>
                        <section className="flex items-center text-white gap-4 md:flex-row sm:flex-col xs:flex-col">
                            <HeartIcon className="text-[25px]" />
                            <p>Passionate</p>
                        </section>
                        <section className="flex items-center text-white gap-4 md:flex-row sm:flex-col xs:flex-col">
                            <StarIcon className="text-[25px]" />
                            <p>Expert</p>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default About;
