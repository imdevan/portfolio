import H from '_c/h'
import { Playfair_Display, Fira_Code, Montserrat } from 'next/font/google'
type Props = {
  children?: React.ReactNode
}
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

const AppTitle = ({ children }: Props) => (
  <H className="text-5xl md:text-8xl lg:text-9xl text-center">{children}</H>
)

export default AppTitle
