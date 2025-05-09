import cn from 'classnames'
import { Roboto_Slab } from 'next/font/google'
import AnimatedMenu from './AnimatedMenu'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

type Props = {
  link?: boolean
}

const Header = ({ link = true }: Props) => {
  return (
    <>
      <div className="fixed top-0 left-0 transition-colors duration-200 w-full z-50">
        <div className="container p-8 flex justify-between items-center">
            {link ? (
              <AnimatedMenu />
            ) : (
              <div/>
            )}
          <div/>
        </div>
      </div>

      <div className="fixed top-0 left-0 bg-gradient-to-b dark:from-zinc-900 from-white to-transparent dark:text-neutral-50 transition-colors duration-200 w-full z-40 opacity-90 dark:opacity-95">
        <div className="container p-8">
          <h2 className={cn(robotoSlab.className, 'text-xl md:text-xl font-bold tracking-tight')}>
            {' '}
          </h2>
        </div>
      </div>
    </>
  )
}

export default Header
