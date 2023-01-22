import DefaultTags from "./DefaultTags"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <DefaultTags />
      </head>
      <body>{children}</body>
    </html>
  )
}
