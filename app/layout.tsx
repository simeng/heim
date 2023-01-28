import DefaultTags from "./DefaultTags"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <DefaultTags />
      </head>
      <body>{children}</body>
    </html>
  )
}
