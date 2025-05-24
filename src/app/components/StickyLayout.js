// components/StickyLayout.js
'use client';
import Image from 'next/image';
import StickyNav from './StickyNav';

export default function StickyLayout() {
    return (
        <>
            <StickyNav />
            {/* Hero */}
            <section className="et-hero-tabs">
            <Image
  src="/assets/img/logotransmi-removebg.png"
  alt="Logo Transmi"
  width={300}
  height={150}
/>
                <div className="et-hero-tabs-container">
                    <a className="et-hero-tab" href="#tab-es6">TITULO 1</a>
                    <a className="et-hero-tab" href="#tab-flexbox">TITULO 2</a>
                    <a className="et-hero-tab" href="#tab-react">TITULO 3</a>
                    <a className="et-hero-tab" href="#tab-angular">TITULO 4</a>
                    <a className="et-hero-tab" href="#tab-other">TITULO 5</a>
                    <span className="et-hero-tab-slider"></span>
                </div>
            </section>

            {/* Main */}
            <main className="et-main">
            
                <section className="et-slide" id="tab-es6">
                    <h1>TITULO 1</h1>
                    <h3>Algo del titulo 1</h3>
                </section>
                <section className="et-slide" id="tab-flexbox">
                    <h1>TITULO 2</h1>
                    <h3>Algo del titulo 2</h3>
                </section>
                <section className="et-slide" id="tab-react">
                    <h1>TITULO 3</h1>
                    <h3>Algo del titulo 3</h3>
                </section>
                <section className="et-slide" id="tab-angular">
                    <h1>TITULO 4</h1>
                    <h3>Algo del titulo 4</h3>
                </section>
                <section className="et-slide" id="tab-other">
                    <h1>TITULO 5</h1>
                    <h3>Algo del titulo 5</h3>
                </section>
            </main>
        </>
    );
}
