import Image from "next/image";

export const metadata = {
  title: "About | WizeQR",
  description: "The tiny origin story, privacy in plain English, and why this QR generator exists.",
};

export default function AboutPage() {
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
              About WizeQR
            </h1>
            <p className="text-brand-sub">
              A tiny origin story, what it is (and isn't), and how we treat your data like it's hot lava.
            </p>
          </header>

          {/* Origin story */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">A tiny origin story (with caffeine and spite)</h2>
            <p>
              Once upon a time, we needed a QR code generator. The "free" ones wanted accounts, 
              emails, cookies, and probably our firstborn. They tracked everything, added watermarks, 
              and made us jump through hoops for basic functionality.
            </p>
            <p>
              <span className="font-semibold">WizeQR</span> is the result—dead simple,
              no login, no drama. Generate QR codes locally in your browser, customize colors, 
              add logos, and export PNG or SVG instantly. No accounts, no tracking, no watermarks.
            </p>
          </section>

          {/* What it is / isn't */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">What it is (and what it isn't)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">No logins, ever.</span> If you can open a browser, you can generate QR codes.</li>
              <li><span className="font-medium">Local processing.</span> Everything happens in your browser—we never see your data.</li>
              <li><span className="font-medium">Fully customizable.</span> Colors, logos, dot styles, corner shapes—make it yours.</li>
              <li><span className="font-medium">No bloat.</span> No signup funnels, no creepy trackers, no watermarks.</li>
            </ul>
          </section>

          {/* Features */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">6 dot styles:</span> Rounded, dots, classy, square, and more</li>
              <li><span className="font-medium">3 corner types:</span> Square, extra-rounded, and dot styles</li>
              <li><span className="font-medium">Logo support:</span> Upload your own image to center in the QR code</li>
              <li><span className="font-medium">Export formats:</span> PNG and SVG downloads</li>
              <li><span className="font-medium">Size control:</span> From 256px to 1024px</li>
            </ul>
          </section>

          {/* Privacy */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Privacy, in plain English</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We <span className="font-semibold">don't store</span> your QR code data. We don't want it.</li>
              <li>Everything happens <span className="font-semibold">locally</span> in your browser.</li>
              <li>Your settings are saved locally via{" "}
                <code className="px-1 py-0.5 bg-brand-panel border border-brand-border rounded">localStorage</code>.
                Delete it anytime.
              </li>
              <li>No analytics, no tracking, no data collection—just pure QR generation.</li>
            </ul>
          </section>

          {/* Why free */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Why free?</h2>
            <p>
              Because QR code generation shouldn't require procurement. If this saves you five minutes
              and a subscription fee, it's already paying rent.
            </p>
          </section>

          {/* Easter egg + contact */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Say hi</h2>
            <p>
              If you actually read this page (you legend), email us with the subject
              <span className="mx-1 font-semibold">"🦉 I read the About"</span>
              and we'll reply with a terrible dad joke.
            </p>
            <p>
              Contact:{" "}
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
              Our north star is <span className="font-medium">WIZE</span>:
            </p>
            <p>
              <span className="text-sm ml-1">Wisdom, Impact, Zero&nbsp;Guessing, Execution.</span>
            </p>
            <p>
              <span className="text-sm ml-1">
                <a
                  href="https://wozwize.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-blue hover:text-brand-blue2 underline"
                >
                  Learn More About WozWize Core Values
                </a>
              </span>
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
