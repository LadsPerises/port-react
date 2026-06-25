import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Terminals from '../components/sections/Terminals';
import Legislation from '../components/sections/Legislation';
import NewsPreview from '../components/sections/NewsPreview';
import Contacts from '../components/sections/Contacts';

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Terminals />
            <Legislation />
            <NewsPreview />
            <Contacts />
        </main>
    );
}
