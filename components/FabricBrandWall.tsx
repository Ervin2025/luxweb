'use client';

import { useMemo, useState } from 'react';

interface FabricBrandItem {
  title: string;
  logoMark: string;
  origin: string;
  originFilter: string;
  usage: string;
  feature: string;
  description: string;
  highlights: readonly string[];
}

interface FabricBrandWallProps {
  items: readonly FabricBrandItem[];
}

const FILTER_DEFAULTS = {
  usage: 'All',
  feature: 'All',
  origin: 'All',
};

export default function FabricBrandWall({ items }: FabricBrandWallProps) {
  const [filters, setFilters] = useState(FILTER_DEFAULTS);

  const options = useMemo(
    () => ({
      usage: ['All', ...new Set(items.map(item => item.usage))],
      feature: ['All', ...new Set(items.map(item => item.feature))],
      origin: ['All', ...new Set(items.map(item => item.originFilter))],
    }),
    [items]
  );

  const filteredItems = useMemo(
    () =>
      items.filter(item => {
        return (
          (filters.usage === 'All' || item.usage === filters.usage) &&
          (filters.feature === 'All' || item.feature === filters.feature) &&
          (filters.origin === 'All' || item.originFilter === filters.origin)
        );
      }),
    [filters, items]
  );

  return (
    <div className="space-y-8">
      <div className="section-shell p-6 sm:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          <FilterSelect
            label="Usage"
            value={filters.usage}
            options={options.usage}
            onChange={value => setFilters(prev => ({ ...prev, usage: value }))}
          />
          <FilterSelect
            label="Feature"
            value={filters.feature}
            options={options.feature}
            onChange={value => setFilters(prev => ({ ...prev, feature: value }))}
          />
          <FilterSelect
            label="Origin"
            value={filters.origin}
            options={options.origin}
            onChange={value => setFilters(prev => ({ ...prev, origin: value }))}
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-neutral-50 px-5 py-4 text-sm text-neutral-700">
          <p>{filteredItems.length} collections matched to the current filter.</p>
          <button
            type="button"
            onClick={() => setFilters(FILTER_DEFAULTS)}
            className="rounded-full border border-primary/20 px-4 py-2 font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
          >
            Reset filters
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map(item => (
          <article key={item.title} className="section-shell p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-16 min-w-16 items-center justify-center rounded-[1.25rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(197,160,89,0.14),rgba(255,255,255,0.88))] px-4">
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                  {item.logoMark}
                </span>
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                <Tag>{item.origin}</Tag>
                <Tag>{item.usage}</Tag>
                <Tag>{item.feature}</Tag>
              </div>
            </div>
            <h3 className="mt-6 font-heading text-3xl font-semibold text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
              {item.description}
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-neutral-600">
              {item.highlights.map(highlight => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">
        {label}
      </span>
      <select
        value={value}
        onChange={event => onChange(event.target.value)}
        className="h-12 w-full rounded-full border border-primary/15 bg-neutral-50 px-4 text-sm text-neutral-800 outline-none transition focus:border-primary"
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}
