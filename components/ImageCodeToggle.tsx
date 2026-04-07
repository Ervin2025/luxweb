'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'luxaura-image-codes';
const EVENT_NAME = 'luxaura-image-codes-change';

function readEnabledFromDom() {
  return document.documentElement.dataset.imageCodes === '1';
}

function persistEnabled(enabled: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, enabled ? '1' : '0');
  } catch (_error) {
    // Ignore storage errors in private mode or locked-down browsers.
  }
}

function applyEnabled(enabled: boolean) {
  const root = document.documentElement;

  if (enabled) {
    root.dataset.imageCodes = '1';
  } else {
    delete root.dataset.imageCodes;
  }

  window.dispatchEvent(
    new CustomEvent(EVENT_NAME, {
      detail: { enabled },
    })
  );
}

export default function ImageCodeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(readEnabledFromDom());

    const handleChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ enabled?: boolean }>;
      setEnabled(Boolean(customEvent.detail?.enabled));
    };

    window.addEventListener(EVENT_NAME, handleChange);

    return () => {
      window.removeEventListener(EVENT_NAME, handleChange);
    };
  }, []);

  const handleToggle = () => {
    const next = !enabled;
    persistEnabled(next);
    applyEnabled(next);
    setEnabled(next);
  };

  return (
    <button
      id="image-code-toggle"
      type="button"
      className="image-code-toggle"
      aria-pressed={enabled}
      onClick={handleToggle}
    >
      {enabled ? 'Hide Image Codes' : 'Show Image Codes'}
    </button>
  );
}
