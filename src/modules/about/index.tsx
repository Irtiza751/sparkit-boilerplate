export function About() {
  return (
    <section className="min-h-screen container mx-auto pt-5">
      <h1 className="text-5xl font-bold">About Spartkit</h1>
      <p className="mb-4 text-lg mb-6 mt-4">
        <strong>sparkit-boilerplate</strong> is a modern, scalable React boilerplate built on top of{' '}
        <strong>Vite</strong>, designed to help teams build production-grade web apps faster and
        more efficiently.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-base">
        <li>
          <strong>React + Vite:</strong> Fast development with instant HMR and lightweight builds.
        </li>
        <li>
          <strong>TypeScript:</strong> Full type safety across the app.
        </li>
        <li>
          <strong>Zustand:</strong> Scalable and simple state management.
        </li>
        <li>
          <strong>TanStack Query:</strong> Powerful async data fetching and caching.
        </li>
        <li>
          <strong>Tailwind CSS:</strong> Utility-first styling for fast UI development.
        </li>
        <li>
          <strong>i18n (i18next):</strong> Internationalization out of the box.
        </li>
        <li>
          <strong>React Hook Form:</strong> Performant and flexible form handling.
        </li>
        <li>
          <strong>TanStack Router:</strong> Type-safe and declarative routing.
        </li>
        <li>
          <strong>Custom CLI:</strong> Quickly scaffold components, interfaces, and classes using
          EJS templates.
        </li>
      </ul>

      <p className="mt-6 text-base">
        Inspired by <em>Ignite for React Native</em>, this boilerplate promotes clean architecture,
        modular design, and a productive development experience.
      </p>
    </section>
  )
}
