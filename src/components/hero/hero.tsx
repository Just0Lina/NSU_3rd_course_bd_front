import { NewsletterForm } from '@/components/newsletter-form'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type ScrollRevealRefElement = HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement

const HeadingWrapper = styled.div`
    max-width: 800px;
    align-items: center;
    align-self: stretch;
    background-color: transparent;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    position: relative;
    width: 100%;
`

const HeadingText = styled.h1`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    align-self: stretch;
    color: var(--dawn-pink);
    display: -webkit-box;
    font-family: var(--font-family-syne);
    font-size: var(--font-size-xxxxl);
    font-style: normal;
    font-weight: 700;
    letter-spacing: -1.92px;
    line-height: 110px;
    margin-top: -1.00px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
`;

const OverlayComp = styled.div`
    background: radial-gradient(50% 50% at 50% 50%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    background-color: transparent;
    height: 705px;
    left: 0px;
    opacity: 0.6;
    position: absolute;
    top: 0px;
    width: 1280px;
`;

const HeadingComponent = styled.div`
    background-color: transparent;
    position: relative;
`


const CtaButton = styled.div`
    align-items: center;
    background-color: var(--giants-club);
    border-radius: 8px;
    display: flex;
    flex: 0 0 auto;
    gap: 4px;
    justify-content: center;
    max-width: 360px;
    padding: 16px 48px;
    position: relative;
    width: 100%;
    margin: 0 auto;
`

const VerticallyAlignedText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const CtaText = styled(Link)`
    color: var(--dawn-pink);
    font-family: var(--font-family-work_sans);
    font-size: var(--font-size-l);
    font-style: normal;
    font-weight: 400;
    line-height: 25.2px;
`

const HeaderText = styled.div`
    align-self: stretch;
    background-color: transparent;
    color: var(--giants-club);
    font-family: var(--font-family-syne);
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.00px;
    line-height: 33.6px;
    margin-top: -1.00px;
    position: relative;
    text-align: center;
`
const MainText = styled.div`
    color: var(--waterloo-);
    font-family: var(--font-family-yaldevi_colombo_medium-regular);
    font-size: var(--font-size-xxl);
    line-height: 45.6px;
    align-items: center;
    
`


function Hero({
                className,
                content,
                illustration,
                title
              }: {
  className?: string
  content: string
  illustration?: ReactNode
  title: string
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([])

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150
        })
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  function onNewsletterSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ values })
      }, 1000)
    })
  }

  const addToScrollRevealRef = (el: ScrollRevealRefElement) => {
    scrollRevealRef.current.push(el)
  }

  return (
    <section className={cn('text-center lg:w-full lg:py-20 lg:text-left', className)}>
      <div className="hero-image mx-auto py-10 top-0 lg:mx-0 lg:p-0 " style={{ width: '100%', position: 'relative' }}>
        <img
          src="https://cdn.animaapp.com/projects/65e0bc07cfb5a1bf88ba2753/releases/65e0bc8e6b4a934c58f35f74/img/type-big-type----lummi.png"
          alt="Hero Image" style={{ width: '100%', height: 'auto' }} />
        <div
          className="overlay-gDR1XI absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
          <div className="copy-component-gDR1XI copy-component">
            <OverlayComp></OverlayComp>
            <HeadingWrapper>
              <HeadingComponent>
                <HeadingText>Organize Your Time</HeadingText>
              </HeadingComponent>
            </HeadingWrapper>
            <CtaButton>
              <VerticallyAlignedText>
                <CtaText to="/login">Discover More</CtaText>
              </VerticallyAlignedText>
            </CtaButton>
          </div>

          <div className="type-big-type-lummi-UObdH5" data-id="12:313-f5b99e2d-76b6-451e-b931-557f0a713b45">
            <div className="overlay-gDR1XI" data-id="12:314"></div>
            <div className="copy-component-gDR1XI copy-component" data-id="12:315">

            </div>
          </div>
        </div>
      </div>


      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">

          <div className="hero-copy pb-16 pt-10 lg:min-w-[40rem] lg:pr-20 lg:pt-16">
            <div className="mx-auto items-center w-full max-w-3xl">
                <HeaderText>
                  {title}
                </HeaderText>
                <MainText>
                  {content}
                </MainText>

            </div>

            <div ref={addToScrollRevealRef}>
              <NewsletterForm
                className="mx-auto mt-8 max-w-md lg:mx-0"
                submitText="Get early access"
                onSubmit={onNewsletterSubmit}
              />
            </div>
          </div>

          {!!illustration && (
            <div className="relative -mx-6 py-10 lg:mx-0 lg:p-0">{illustration}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
