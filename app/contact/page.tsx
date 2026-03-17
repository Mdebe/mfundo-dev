export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>

      <p className="text-gray-600 mb-10 leading-relaxed">
        Interested in working together, collaborating on a project, or just
        want to say hello? I’m always open to discussing new ideas,
        freelance opportunities, and tech partnerships.
      </p>

      {/* Contact Details */}
      <div className="space-y-4 mb-12 text-gray-700">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:mfundosithole@outlook.com"
            className="text-cyan-600 hover:underline"
          >
            mfundosithole@outlook.com
          </a>
        </p>

        <p>
          <span className="font-semibold">WhatsApp:</span>{" "}
          <a
            href="https://wa.me/27627102645"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            062 710 2645
          </a>
        </p>

        <p>
          <span className="font-semibold">Location:</span> South Africa
        </p>

        <p>
          <span className="font-semibold">Availability:</span>{" "}
          Open to freelance, contracts & collaborations
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="mailto:mfundosithole@outlook.com"
          className="rounded-lg bg-black px-8 py-3 text-white hover:bg-gray-800 transition"
        >
          Email Me
        </a>

        <a
          href="https://wa.me/27627102645"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-green-600 px-8 py-3 text-white hover:bg-green-700 transition"
        >
          Chat on WhatsApp
        </a>

        <a
          href="/Mfundo-Sithole-CV.pdf"
          target="_blank"
          className="rounded-lg border border-gray-300 px-8 py-3 text-gray-800 hover:bg-gray-100 transition"
        >
          Download CV
        </a>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-sm text-gray-500">
        I usually respond within 24 hours.
      </p>
    </section>
  );
}
