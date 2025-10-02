import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-display font-bold text-brand-pine mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-display font-bold text-brand-pine mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-display font-semibold text-brand-pine mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base font-body text-neutral-700 leading-relaxed mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-4 font-body text-neutral-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-4 font-body text-neutral-700">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-neutral-700">{children}</li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-brand-pine hover:text-brand-pine/80 underline underline-offset-2 transition-colors ease-smooth"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-sage pl-4 italic text-neutral-600 my-6">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
