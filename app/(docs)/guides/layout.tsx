import React, { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary py-4">
        <div className="container mx-auto">header</div>
      </header>
      <main className="flex-grow container mx-auto">{children}</main>
      <footer className="bg-primary py-4">
        <div className="container mx-auto">footer</div>
      </footer>
    </div>
  )
}

export default layout
