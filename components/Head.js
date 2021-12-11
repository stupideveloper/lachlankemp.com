import NextHead from 'next/head';

export default function Head({children, title}) {
  return (
    <NextHead>
      {title && 
        <title>{title} | Lachlan Kemp</title>
      }
			<link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      { children }
    </NextHead>
  )
}