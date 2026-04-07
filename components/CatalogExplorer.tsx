'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import ImageCodeBadge from '@/components/ImageCodeBadge';
import type { CatalogItem } from '@/lib/site-data';

interface CatalogExplorerProps {
  items: CatalogItem[];
}

type FilterState = {
  brand: string;
  origin: string;
  material: string;
  priceBand: string;
  usage: string;
};

const defaultFilters: FilterState = {
  brand: 'All',
  origin: 'All',
  material: 'All',
  priceBand: 'All',
  usage: 'All',
};

function getCatalogImageCodeBase(item: CatalogItem, index: number) {
  return item.imageCodeBase ?? `LXA-CAT-${String(index + 1).padStart(2, '0')}`;
}

function getCatalogImageCode(item: CatalogItem, index: number, slot: 'CARD' | 'DETAIL') {
  return `${getCatalogImageCodeBase(item, index)}-${slot}`;
}

export default function CatalogExplorer({ items }: CatalogExplorerProps) {
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(items[0] ?? null);
  const itemIndexLookup = useMemo(
    () => new Map(items.map((item, index) => [item.id, index])),
    [items]
  );

  const filterOptions = useMemo(
    () => ({
      brands: ['All', ...new Set(items.map(item => item.brand))],
      origins: ['All', ...new Set(items.map(item => item.origin))],
      materials: ['All', ...new Set(items.map(item => item.material))],
      priceBands: ['All', ...new Set(items.map(item => item.priceBand))],
      usages: ['All', ...new Set(items.flatMap(item => item.usages))],
    }),
    [items]
  );

  const filteredItems = useMemo(
    () =>
      items.filter(item => {
        return (
          (filters.brand === 'All' || item.brand === filters.brand) &&
          (filters.origin === 'All' || item.origin === filters.origin) &&
          (filters.material === 'All' || item.material === filters.material) &&
          (filters.priceBand === 'All' || item.priceBand === filters.priceBand) &&
          (filters.usage === 'All' || item.usages.includes(filters.usage))
        );
      }),
    [filters, items]
  );

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_20px_60px_rgba(26,24,22,0.08)] backdrop-blur sm:p-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <FilterSelect
            label="Brand"
            value={filters.brand}
            options={filterOptions.brands}
            onChange={value => updateFilter('brand', value)}
          />
          <FilterSelect
            label="Origin"
            value={filters.origin}
            options={filterOptions.origins}
            onChange={value => updateFilter('origin', value)}
          />
          <FilterSelect
            label="Material"
            value={filters.material}
            options={filterOptions.materials}
            onChange={value => updateFilter('material', value)}
          />
          <FilterSelect
            label="Price"
            value={filters.priceBand}
            options={filterOptions.priceBands}
            onChange={value => updateFilter('priceBand', value)}
          />
          <FilterSelect
            label="Usage"
            value={filters.usage}
            options={filterOptions.usages}
            onChange={value => updateFilter('usage', value)}
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-neutral-50 px-5 py-4 text-sm text-neutral-700">
          <p>
            {filteredItems.length} references shown. Wholesale pricing remains hidden until trade
            account approval.
          </p>
          <button
            type="button"
            onClick={() => setFilters(defaultFilters)}
            className="rounded-full border border-primary/20 px-4 py-2 font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
          >
            Reset filters
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => {
          const itemIndex = itemIndexLookup.get(item.id) ?? index;
          const cardImageCode = getCatalogImageCode(item, itemIndex, 'CARD');

          return (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(26,24,22,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(26,24,22,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                />
                <ImageCodeBadge code={cardImageCode} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(17,20,18,0.02)_0%,_rgba(17,20,18,0.52)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {item.category}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="absolute bottom-4 right-4 rounded-full border border-white/50 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition hover:bg-white hover:text-neutral-900"
                >
                  High-res zoom
                </button>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex flex-wrap gap-2">
                  <Tag>{item.brand}</Tag>
                  <Tag>{item.origin}</Tag>
                  <Tag>{item.priceBand}</Tag>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.usages.map(usage => (
                    <span
                      key={usage}
                      className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {usage}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {selectedItem ? (
        (() => {
          const selectedItemIndex = itemIndexLookup.get(selectedItem.id) ?? 0;
          const detailImageCode = getCatalogImageCode(selectedItem, selectedItemIndex, 'DETAIL');

          return (
            <div className="rounded-[2rem] border border-[#d9ccb5] bg-[#15241df2] p-5 text-white shadow-[0_25px_80px_rgba(10,12,10,0.24)] sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                  <ImageCodeBadge code={detailImageCode} />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#dfc99f]">
                      Zoomed Detail
                    </p>
                    <h3 className="mt-3 font-heading text-3xl font-semibold">{selectedItem.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/78">{selectedItem.description}</p>
                    <dl className="mt-6 grid gap-4 text-sm text-white/75 sm:grid-cols-2">
                      <Detail label="Brand" value={selectedItem.brand} />
                      <Detail label="Origin" value={selectedItem.origin} />
                      <Detail label="Material" value={selectedItem.material} />
                      <Detail label="Price band" value={selectedItem.priceBand} />
                    </dl>
                    <div className="mt-6 rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dfc99f]">
                        Detail Focus
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/78">{selectedItem.detailFocus}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {selectedItem.usages.map(usage => (
                      <span
                        key={usage}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/84"
                      >
                        {usage}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()
      ) : null}
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

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dfc99f]">{label}</dt>
      <dd className="mt-2 text-base text-white">{value}</dd>
    </div>
  );
}
