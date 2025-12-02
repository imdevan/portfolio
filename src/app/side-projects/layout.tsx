import Header from '_c/header'

export default function SideProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}


