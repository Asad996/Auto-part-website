import React from 'react';
import { useInView } from 'react-intersection-observer';

const logos = [
    { name: 'MCB', src: 'path_to_logo1.png' },
    { name: 'NTN', src: 'path_to_logo2.png' },
    { name: 'SNR', src: 'path_to_logo3.png' },
    { name: 'SKF', src: 'path_to_logo4.png' },
    { name: 'MBS', src: 'path_to_logo5.png' },
    { name: 'ILJIN', src: 'path_to_logo6.png' },
    { name: 'DAYCO', src: 'path_to_logo7.png' },
    { name: 'KBC', src: 'path_to_logo8.png' },
    { name: 'sedis', src: 'path_to_logo9.png' },
    { name: 'BOWER', src: 'path_to_logo10.png' },
    { name: 'NSK', src: 'path_to_logo11.png' },
    { name: 'MUSASHI', src: 'path_to_logo12.png' },
];

const Brands = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>
            <div className="relative text-center py-16">
                <h1 className="pb-20 text-gray-500 text-9xl font-bold absolute inset-0 flex items-center justify-center opacity-10">
                    BRANDS
                </h1>
                <div
                    ref={ref}
                    className="text-center transition-all duration-1000"
                >
                    <p className={`text-5xl py-4 font-medium transition-transform ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                        Top Brands
                    </p>
                    <p className={`text-sm font-medium transition-transform ${inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 text-center px-96'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Animi aliquid voluptates nostrum autem ratione. Ad cupiditate non natus dolorum. <br /> Illum laboriosam repellat tempora? Temporibus odit quibusdam assumenda cumque doloribus vitae.
                    </p>
                </div>
            </div>


            <div className="py-16 ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {logos.map((logo) => (
                            <div key={logo.name} className="flex items-center justify-center p-2 bg-gray-100 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
                                <img src={logo.src} alt={logo.name} className="h-10 w-36" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brands;
