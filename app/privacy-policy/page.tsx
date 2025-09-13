import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | WizeQR",
  description: "How we handle your data (spoiler: we don't collect any).",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Ultra-wide owl watermark (decorative) */}
      <div
        aria-hidden
        className="pointer-events-none select-none hidden 2xl:block absolute inset-y-0 right-[-140px] w-[520px] z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.45) 20%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 85%)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.45) 20%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 85%)",
          }}
        >
          <Image
            src="/WizeQrLogo.png"
            alt=""
            fill
            sizes="520px"
            className="object-contain opacity-[0.06] contrast-125 saturate-150"
            priority
          />
        </div>
      </div>

      {/* Content wrapper sits above watermark */}
      <div className="relative z-10 grid lg:grid-cols-[1fr,320px] gap-10">
        <article className="space-y-8 max-w-3xl">
          <header className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-brand-sub">
              How we handle your data (spoiler: we don't collect any).
            </p>
            <p className="text-sm text-brand-sub/70">Last updated: September 2025</p>
          </header>

          {/* The short version */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">The short version</h2>
            <p>
              We <span className="font-semibold">don't collect</span> your data. We <span className="font-semibold">don't store</span> your data. 
              We <span className="font-semibold">don't want</span> your data. Everything happens locally in your browser.
            </p>
          </section>

          {/* What we don't do */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">What we don't do</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">No data collection.</span> We don't track, store, or analyze your QR code content.</li>
              <li><span className="font-medium">No cookies.</span> Except those required by your browser or settings you explicitly opt into.</li>
              <li><span className="font-medium">No analytics.</span> We don't know how many people use WizeQR or what they generate.</li>
              <li><span className="font-medium">No third-party tracking.</span> No Google Analytics, Facebook pixels, or other creepy stuff.</li>
            </ul>
          </section>

          {/* What happens locally */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">What happens locally</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">QR generation:</span> All processing happens in your browser using JavaScript.</li>
              <li><span className="font-medium">Settings storage:</span> Your preferences are saved locally via{" "}
                <code className="px-1 py-0.5 bg-brand-panel border border-brand-border rounded">localStorage</code>.
              </li>
              <li><span className="font-medium">File uploads:</span> Logo images are processed locally and never sent to our servers.</li>
              <li><span className="font-medium">Downloads:</span> PNG and SVG files are generated and downloaded directly from your browser.</li>
            </ul>
          </section>

          {/* What we might do in the future */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">What we might do in the future</h2>
            <p>
              If we ever add analytics (which we probably won't), they would be:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Anonymized.</span> No personal data, just aggregate usage stats.</li>
              <li><span className="font-medium">Opt-in only.</span> You'd have to explicitly enable it.</li>
              <li><span className="font-medium">Privacy-first.</span> We'd use something like Plausible, not Google Analytics.</li>
            </ul>
            <p>
              If we do this, we'll update this page first and make it super obvious.
            </p>
          </section>

          {/* Your responsibility */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Your responsibility</h2>
            <p>
              You're responsible for the content you encode into QR codes. We don't monitor, 
              moderate, or care what you put in them. Use them wisely.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Questions?</h2>
            <p>
              If you have questions about this privacy policy, email us at{" "}
              <a href="mailto:matt@wozwize.com" className="underline text-brand-blue hover:text-brand-blue2">
                matt@wozwize.com
              </a>
            </p>
          </section>
        </article>

        {/* Sidebar cards */}
        <aside className="space-y-6 sticky top-20 self-start">
          <div className="rounded-2xl border border-brand-border bg-gradient-to-b from-brand-panel to-brand-bg p-5 shadow-soft">
            <div className="flex items-center gap-3">
              <Image
                src="/WizeQrLogo.png"
                alt="WozWize Owl"
                width={36}
                height={36}
                className="rounded"
                priority
              />
              <div className="leading-tight">
                <div className="font-semibold text-brand-text">Built by WozWize</div>
                <a
                  href="https://wozwize.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-brand-blue2 underline"
                >
                  wozwize.com
                </a>
              </div>
            </div>
            <p className="mt-4 text-sm text-brand-sub">
              Privacy is a core value, not an afterthought.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
