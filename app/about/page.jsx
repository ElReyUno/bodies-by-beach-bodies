"use client";

import Link from 'next/link';
import Button from '../ui/Button';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About = ({ embedded }) => {
    return (
        <>
            {!embedded && <Nav />}
            <div className="container mx-auto p-4 md:p-8">
                {/* Hero Section */}
                {!embedded && (
                    <section className="relative mb-8">
                        <div className='flex flex-col md:flex-row-reverse items-center'>
                            <div className='md:w-1/2 md:pl-8'>
                                <img
                                    src='/bodies-by-beach-bodies/img/collage.webp'
                                    alt="Montage of diverse individuals using various fitness facilities"
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                            <div className="md:w-1/2 flex flex-col">
                                <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 rounded-lg shadow-md">
                                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                        Experience Holistic Wellness Globally. <br />
                                        <span className='text-blue-500'>Bodies by Beach Bodies</span> & <span className="text-orange-500">Zebo Physical Therapy:</span> <br />
                                        Your Partner in Transformation.
                                    </h1>
                                </div>
                                <div className="bg-white bg-opacity-80 backdrop-blur-md p-4 rounded-lg shadow-md">
                                    <p className="text-gray-700 mb-6">
                                        "GREETNIGS!"
                                        Welcome to Bodies by Beach Bodies! We're excited to offer you a unique fusion of fitness and wellness,
                                        designed to help you reach your goals, no matter where you are. With over a decade of global
                                        experience and cutting-edge techniques, we're committed to transforming lives. Get ready to feel
                                        leaner, stronger, and more energized than ever before. Our mission is to deliver fast, science-backed
                                        results, supported by expert training and therapeutic care. Whether you're seeking increased
                                        strength, flexibility, or overall well-being, we provide the tools and personalized guidance you
                                        need, both in-person and virtually. Join us and let's achieve your fitness goals together!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                {/* Main Content */}
                <div className={embedded ? "bg-white bg-opacity-80 backdrop-blur-md p-4 rounded-lg shadow-md" : ""}>
                <section className="mb-8 content">
                    <h1>About Us</h1>
                    <h2 title="Our Mission & Philosophy" />
                    <p className="text-gray-700 mb-6">
                        CIRCUIT TRAINING<br />
                        ARE YOU TIRED OF NOT FEELING HEALTHY? ARE YOU READY TO HAVE THAT BODY YOU'VE ALWAYS WANTED?
                        <br /><br />
                        Bodies By Beach Bodies offers everything you need to reach your fitness goals! We encourage ALL AGES, SIZES, and
                        SHAPES from all over the world! Whether you're a marathon runner, a soccer mom, or just want to
                        improve your health and well-being, we're here to guide you.
                        <br />
                        When you work out outdoors in our boot camp, you are in an ever-changing environment. You must adjust
                        swiftly to different terrain, inclines, declines, obstacles, and climates. This improves your Mind-Body
                        Connection, Agility, Balance, Coordination, and Strength.
                    </p>
                    <p className="text-gray-700 mb-6">
                        You burn more fat and calories! You also get an immediate sense of accomplishment!
                        Our Outdoor Boot Camp or Indoor Fitness Classes, along with access to our comprehensive facilities,
                        are the best way to rejuvenate your mind, body, and spirit.
                    </p>
                    <h2 className='font-semibold text-lg mb-2'> We are proud to offer access to:</h2>
                    <ul className="list-none list-inside text-gray-700 mb-6">
                        <li>Physical Therapy</li>
                        <li>Full-Service Fitness Center</li>
                        <li>Spa Services</li>
                        <li>Clinical Programming</li>
                        <li>3 Swimming Pools</li>
                        <li>Full Court Basketball</li>
                        <li>Over 75 Group Exercise Classes</li>
                        <li>Steam Room</li>
                        <li>Sauna</li>
                        <li>Ice Baths</li>
                        <li>Breathing Therapy</li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                        Join us for one of our challenging classes in the perfect workout environment!
                    </p>

                    <p className="text-gray-700 mb-6">
                        My approach to personal training and boot camp instruction is built on a foundation of personalized
                        attention, scientific principles, and genuine care. We don't believe in one-size-fits-all solutions.
                        Instead, we take the time to understand your unique needs, goals, and limitations. Whether you're
                        looking to lose weight, build strength, improve your athletic performance, recover from an injury, or
                        simply relax and rejuvenate, we are committed to helping you achieve a holistic sense of wellness.
                    </p>
                    <p className="text-gray-700 mb-6">
                        We offer boot camp style training, as well as one-on-one sessions and group training. I also provide
                        online coaching and nutrition guidance. And now you have access to a whole new world of therapeutic
                        and wellness solutions.
                    </p>
                    <h2 className='font-semibold text-lg mb-2'>24/7 Member Access</h2>
                    <p className="text-gray-700 mb-6">
                        ($8 for 24-hour activation code)
                    </p>
                    <h2 className='font-semibold text-lg mb-2'>Office Hours:</h2>
                    <p className="text-gray-700 mb-6">
                        Monday-Friday: 8:00 am - 4:00 pm<br />
                        Saturday: 8:00 am - 2:00 pm<br />
                        Sunday: 8:00 am - 12:00 pm<br />
                        Personal Training and Boxing Available
                    </p>
                    <h2 className='font-semibold text-lg mb-2'>Boxing Lessons</h2>
                    <p className="text-gray-700 mb-6">
                        Affordable boxing lessons with semi-pro U.S. army boxing champions.
                    </p>
                    <p className="text-gray-700 mb-6">
                        My goal is to empower you with the knowledge and habits to make lasting, positive changes in your
                        life. This website, and our tech-based solutions, coupled with the complete wellness ecosystem of
                        Sid's Physical Therapy, will bring this vision to anyone, anywhere.
                    </p>
                    <p className="text-gray-700 mb-6">
                        I'm not just a trainer; I'm a partner in your wellness journey. Let's work together to make your
                        fitness goals a reality, no matter where you are.
                    </p>
                    <div className="mt-4">
                        <Link href="/contact">
                            <Button >Contact Me/Explore Global Options/Get Started Today</Button>
                        </Link>
                    </div>
                </section>
                </div>
                <section className="bg-gray-100 p-4 rounded mt-4 text-center">
                    <p className="text-gray-700 text-sm">
                        NOTICE:
                        ALL BOOT CAMP CLASSES RUN FROM START DATE UNTIL FINISH DATE FOR EACH CAMP. NO MAKE-UP DAYS OR
                        REFUNDS WILL BE GIVEN FOR ANY REASON ONCE A CAMPER HAS PAID FOR THEIR SESSION. ALL MAKE-UP
                        CLASSES ARE $10 PER CAMPER AND HELD AT 8 A.M. OR 6 A.M. ON SATURDAYS. NO CREDIT WILL BE GIVEN NOR TIME EXTENDED TOWARDS ANOTHER BOOT CAMP SESSION FOR MISSED CLASS TIME.
                    </p>
                </section>
            </div>
            {!embedded && <Footer />}
        </>
    );
};

export default About;