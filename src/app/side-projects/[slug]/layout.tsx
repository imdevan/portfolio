import Header from '_c/header'

export default function SideProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

