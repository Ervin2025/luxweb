import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import { IMAGE_CODE_GROUPS } from '@/lib/image-code-reference';

export const metadata: Metadata = {
  title: 'Image Codes',
  description: 'Internal image code index for LuxAura page media replacement.',
  robots: {
    index: false,
    follow: false,
  },
};

function assetName(src: string) {
  return src.split('/').pop() ?? src;
}

export default function ImageCodesPage() {
  return (
    <div>
      <section className="section-padding pb-8 pt-28 sm:pt-32 lg:pt-36">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Internal Reference"
            title="Image code index for faster replacement requests"
            description="Use the floating Image Codes button on any page to show or hide the image numbers directly on the website. Then send me the code plus the new file, and I can replace that exact image slot."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/?image-codes=1" className="btn-primary">
              Open Home With Codes
            </Link>
            <Link href="/custom-curtains-sheers?image-codes=1" className="btn-secondary">
              Open Window Treatments With Codes
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Image Codes', href: '/image-codes' }]} />
      </div>

      <section className="section-padding pt-6">
        <div className="container-custom space-y-10">
          {IMAGE_CODE_GROUPS.map(group => (
            <section key={group.page} className="section-shell p-8 sm:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="eyebrow">Page</p>
                  <h2 className="mt-3 font-heading text-4xl font-semibold text-neutral-900">
                    {group.page}
                  </h2>
                </div>
                {group.pageHref === '/image-codes' ? (
                  <p className="max-w-sm text-sm leading-6 text-neutral-600">
                    Shared component reference. These codes are ready when the component is used,
                    even if it is not currently mounted on a live page.
                  </p>
                ) : (
                  <Link href={`${group.pageHref}?image-codes=1`} className="btn-secondary">
                    Open This Page With Codes
                  </Link>
                )}
              </div>

              <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-primary/10">
                <div className="grid bg-[#f8f3e8] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-600 md:grid-cols-[180px_1fr_260px_120px]">
                  <div>Code</div>
                  <div>Location</div>
                  <div>Current File</div>
                  <div>Type</div>
                </div>
                {group.items.map(item => (
                  <div
                    key={item.code}
                    className="grid gap-3 border-t border-primary/10 px-4 py-4 text-sm text-neutral-700 md:grid-cols-[180px_1fr_260px_120px]"
                  >
                    <div className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      {item.code}
                    </div>
                    <div>{item.label}</div>
                    <div className="break-all">{assetName(item.src)}</div>
                    <div>{item.type === 'video' ? 'Video' : 'Image'}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
