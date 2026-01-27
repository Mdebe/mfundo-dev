export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <p className="text-gray-600 mb-6">
        Interested in working together or building something great?
      </p>

      <a
        href="mailto:mfundo.sithole@email.com"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
      >
        Email Me
      </a>
    </section>
  );
}