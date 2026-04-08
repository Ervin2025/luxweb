'use client';

import { useEffect } from 'react';

export default function ScrollRevealBoot() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodesSeen = new WeakSet<Element>();

    const showImmediately = (node: Element) => {
      node.setAttribute('data-reveal-visible', '1');
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(showImmediately);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal-visible', '1');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    const scan = () => {
      document.querySelectorAll('[data-reveal]').forEach(node => {
        if (node.getAttribute('data-reveal-visible') === '1' || nodesSeen.has(node)) {
          return;
        }

        nodesSeen.add(node);
        observer.observe(node);
      });
    };

    const mutationObserver = new MutationObserver(() => {
      window.requestAnimationFrame(scan);
    });

    window.requestAnimationFrame(scan);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
