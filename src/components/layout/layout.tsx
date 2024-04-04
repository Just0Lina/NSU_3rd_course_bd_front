import type { PropsWithChildren } from 'react'

import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Header } from '@/components/header'
import { cn } from '@/utils/cn'
import { MainContentWrapper } from '@/components/header/header'

function Layout({
                  children,
                  className
                }: PropsWithChildren<{
  className?: string
}>) {
  return (
    <div
      className={cn(
        'relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl',
        className
      )}
    >
      {/*<Gradient className="absolute bottom-1 left-1/2 top-1 ml-28 hidden w-1/2 lg:block" />*/}
      <Header title="Linacy" />
      <MainContentWrapper>
        <main className="flex-shrink-0 flex-grow items-center lg:flex">{children}</main>
        <Footer />
      </MainContentWrapper>
    </div>
  )
}

export default Layout
