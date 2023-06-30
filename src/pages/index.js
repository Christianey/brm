import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import AboutBRM from '@/components/AboutBRM'
import WhyChooseUs from '@/components/WhyChooseUs'
import Products from '@/components/Products'
import Clients from '@/components/Clients'
import News from '@/components/News'
import HomeAboutBrm from '@/components/HomeAboutBrm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BRM</title>
        <meta name="description" content="Bior Resources Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        showButton
        heroImage={"/farmer.jpg"}
        title={"Welcome to our company;"}
        text={
          "We are dedicated to providing you high quality products and services."
        }
      />
      <Benefits />
      <AboutBRM
        leftSide={<HomeAboutBrm />}
        title=" Bringing Growth To Agriculture"
        text="Bior Resources Management Ltd. Deals majorly on exporting agro
          products. The company exports produce, primarily agricultural raw
          produce across the continents."
        wide
      />
      <WhyChooseUs
        heading={"WHY CHOOSE US"}
        title={
          "To receive high quality and personalized service and products, chooses to meet your demand."
        }
        text="We ensure food increase and the supplies to customers locally and
        internationally at a moderate price, distributing the finest raw crop
        products accompanied with good management services, with a continued
        commitment to promote business practices and expand opportunities and
        career growth for and employee and economic growth."
        bgColor={"brand.primary"}
        imgSrc={"/whyChooseUs.jpg"}
      />
      <Products />
      <Clients />
      <News />
    </>
  )
}
