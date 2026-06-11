import type { AnchorHTMLAttributes, ComponentType } from 'react'

type MDXComponents = Record<string, ComponentType<any>>

function ZipDownloadLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} download className="zip-download-link">
      Descargar tipografía
    </a>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ href, children, ...props }) => {
      if (href && /\.zip$/i.test(href)) {
        return <ZipDownloadLink href={href} {...props} />
      }
      return (
        <a href={href} {...props}>
          {children}
        </a>
      )
    },
  }
}
