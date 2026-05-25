'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

const userImages = [
  { src: '/1.jpeg', leftText: 'My', rightText: 'Princess' },
  { src: '/2.jpeg', leftText: 'Cute', rightText: 'Girl' },
  { src: '/3.jpeg', leftText: 'Love', rightText: 'Forever' },
  { src: '/4.jpeg', leftText: 'Miss', rightText: 'You' },
  { src: '/5.jpeg', leftText: 'Always', rightText: 'Mine' },
  { src: '/6.jpeg', leftText: 'Sweet', rightText: 'Smile' },
  { src: '/7.jpeg', leftText: 'Only', rightText: 'You' },
  { src: '/8.jpeg', leftText: 'Pretty', rightText: 'Eyes' },
  { src: '/9.jpeg', leftText: 'My', rightText: 'Sunshine' },
  { src: '/10.jpeg', leftText: 'Lovely', rightText: 'Face' },
  { src: '/11.jpeg', leftText: 'My', rightText: 'Favorite' },
  { src: '/12.jpeg', leftText: 'Little', rightText: 'Angel' },
  { src: '/13.jpeg', leftText: 'Endless', rightText: 'Love' },
  { src: '/14.jpeg', leftText: 'My', rightText: 'Happiness' },
  { src: '/15.jpeg', leftText: 'Beautiful', rightText: 'Soul' },
  { src: '/16.jpeg', leftText: 'Forever', rightText: 'Yours' },
  { src: '/17.jpeg', leftText: 'My', rightText: 'Heartbeat' },
  { src: '/18.jpeg', leftText: 'You', rightText: 'Shine' },
  { src: '/19.jpeg', leftText: 'Sweetest', rightText: 'Smile' },
  { src: '/20.jpeg', leftText: 'My', rightText: 'Everything' },
  { src: '/21.jpeg', leftText: 'With', rightText: 'Love' },
];

  return (
    <main className="w-screen h-screen bg-[#060010]">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          <audio src="/pretty.mp3" autoPlay loop className="hidden" />
          <DomeGallery
            images={userImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.1}
          />
        </>
      )}
    </main>
  );
}
