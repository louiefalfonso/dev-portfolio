import Head from 'next/head'
import { mainData } from '@/lib/data'
import { About, Portfolio} from '@/components'

export default function Home() {
    return (
        <>
            <Head>
                <title>{mainData.websiteTitle}</title>
                <meta name="description" content={mainData.description} />
                <meta name="keywords" content={mainData.keywords} />
            </Head>
            <main>
                {/* About section */}
                <About />
                {/* Portfolio section */}
                <Portfolio />
            </main>
        </>
    )
}
