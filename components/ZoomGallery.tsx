'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ZoomGalleryItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
}

interface ZoomGalleryProps {
  items: ZoomGalleryItem[];
  theme?: 'light' | 'dark';
}

export default function ZoomGallery({ items, theme = 'light' }: ZoomGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const selectedItem = items[selectedIndex];
  const dark = theme === 'dark';

  useEffect(() => {
    if (!isZoomed) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomed]);

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
        <article
          className={`overflow-hidden rounded-[2rem] border ${
            dark ? 'border-white/12 bg-white/7' : 'border-primary/10 bg-white/80'
          } shadow-[0_24px_70px_rgba(18,22,20,0.10)]`}
        >
          <button
            type="button"
            onClick={() => setIsZoomed(true)}
            className="group block w-full text-left"
            aria-label={`Open enlarged view of ${selectedItem.title}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={selectedItem.imageSrc}
                alt={selectedItem.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 60vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                className={`absolute inset-0 ${
                  dark
                    ? 'bg-[linear-gradient(180deg,rgba(14,15,14,0.06),rgba(14,15,14,0.56))]'
                    : 'bg-[linear-gradient(180deg,rgba(14,15,14,0.02),rgba(14,15,14,0.36))]'
                }`}
              />
              <div className="absolute right-4 top-4 rounded-full border border-white/18 bg-black/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                Zoom Detail
              </div>
            </div>
            <div className="p-6 sm:p-7">
              {selectedItem.eyebrow ? (
                <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${dark ? 'text-[#ead7a8]' : 'text-primary/70'}`}>
                  {selectedItem.eyebrow}
                </p>
              ) : null}
              <h3 className={`mt-3 font-heading text-3xl font-semibold ${dark ? 'text-white' : 'text-neutral-900'}`}>
                {selectedItem.title}
              </h3>
              <p className={`mt-4 text-sm leading-7 sm:text-base ${dark ? 'text-white/78' : 'text-neutral-700'}`}>
                {selectedItem.description}
              </p>
            </div>
          </button>
        </article>

        <div className="grid gap-4">
          {items.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`flex items-center gap-4 rounded-[1.6rem] border p-4 text-left transition ${
                  dark
                    ? isActive
                      ? 'border-[#ead7a8]/35 bg-white/12'
                      : 'border-white/12 bg-white/5 hover:bg-white/10'
                    : isActive
                      ? 'border-primary/20 bg-white'
                      : 'border-primary/10 bg-white/70 hover:bg-white'
                }`}
              >
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${dark ? 'text-[#ead7a8]' : 'text-primary/70'}`}>
                    {item.eyebrow ?? 'Library'}
                  </p>
                  <h4 className={`mt-2 font-heading text-2xl font-semibold ${dark ? 'text-white' : 'text-neutral-900'}`}>
                    {item.title}
                  </h4>
                  <p className={`mt-2 text-sm leading-6 ${dark ? 'text-white/72' : 'text-neutral-700'}`}>
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isZoomed ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0c110f]/72 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/12 bg-[#111615] shadow-[0_28px_90px_rgba(0,0,0,0.34)]"
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsZoomed(false)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/28 text-white transition hover:bg-black/42"
              aria-label="Close zoom view"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative min-h-[360px] lg:min-h-[620px]">
                <Image
                  src={selectedItem.imageSrc}
                  alt={selectedItem.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-[#111615] p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7a8]">
                  {selectedItem.eyebrow ?? 'Zoom View'}
                </p>
                <h3 className="mt-3 font-heading text-4xl font-semibold">{selectedItem.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
