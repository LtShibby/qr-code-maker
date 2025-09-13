import Image from "next/image";

export const metadata = {
  title: "Terms of Service | WizeQR",
  description: "The legal stuff (kept as simple as possible).",
};

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-brand-sub">
              The legal stuff (kept as simple as possible).
            </p>
          </header>

          {/* The basics */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">The basics</h2>
            <p>
              WizeQR is provided <span className="font-semibold">"as is."</span> We make no warranties, 
              express or implied. Use it at your own risk.
            </p>
          </section>

          {/* What you're responsible for */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">What you're responsible for</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Content responsibility.</span> You are solely responsible for the content you encode into QR codes.</li>
              <li><span className="font-medium">Legal compliance.</span> Don't use WizeQR for illegal activity, malware, or deceptive links.</li>
              <li><span className="font-medium">Appropriate use.</span> Don't generate QR codes that violate laws or harm others.</li>
              <li><span className="font-medium">Your data.</span> We don't store your data, so you're responsible for backing up anything important.</li>
            </ul>
          </section>

          {/* What we're not responsible for */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">What we're not responsible for</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">No liability.</span> We are not liable for any damages arising from use or misuse of WizeQR.</li>
              <li><span className="font-medium">No guarantees.</span> We don't guarantee that WizeQR will work perfectly or be available 100% of the time.</li>
              <li><span className="font-medium">No support.</span> This is a free tool. We don't provide technical support or troubleshooting.</li>
              <li><span className="font-medium">No data recovery.</span> If you lose your QR codes, we can't help you recover them.</li>
            </ul>
          </section>

          {/* Prohibited uses */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Prohibited uses</h2>
            <p>Don't use WizeQR for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Illegal activities or content that violates laws</li>
              <li>Malware, viruses, or other harmful software</li>
              <li>Deceptive or misleading links</li>
              <li>Spam or unsolicited communications</li>
              <li>Content that violates others' rights</li>
            </ul>
          </section>

          {/* Changes to terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Changes to these terms</h2>
            <p>
              We may update these Terms at any time by posting a new version here. 
              If we make significant changes, we'll try to make it obvious.
            </p>
            <p>
              Your continued use of WizeQR after changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Termination */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Termination</h2>
            <p>
              We can stop providing WizeQR at any time, for any reason, without notice. 
              Since it's free and local, this shouldn't be a big deal.
            </p>
          </section>

          {/* Governing law */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Governing law</h2>
            <p>
              These terms are governed by the laws of the United States. 
              If you have a legal dispute with us, it'll be handled in US courts.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Questions?</h2>
            <p>
              If you have questions about these terms, email us at{" "}
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
              Simple terms for a simple tool.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
