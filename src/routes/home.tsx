import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'
import { MyComp } from '@/components/myComp'


export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Vision & Growth"
        content="Повысьте свою продуктивность с помощью содержательных статей, эффективного отслеживания времени и индивидуальных рекомендаций"
        // illustration={<HeroIllustration />}
      />
      {/*<MyComp />*/}
    </Layout>
  )
}
