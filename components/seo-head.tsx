import Head from "next/head"

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  structuredData?: object
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/placeholder.svg?height=630&width=1200",
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title.includes("Odgušenje kanalizacije") ? title : `${title} | Odgušenje kanalizacije Beograd`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Odgušenje kanalizacije" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="sr_RS" />
      <meta property="og:site_name" content="Odgušenje kanalizacije" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="RS-00" />
      <meta name="geo.placename" content="Beograd" />
      <meta name="geo.position" content="44.8125;20.4612" />
      <meta name="ICBM" content="44.8125, 20.4612" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
    </Head>
  )
}
