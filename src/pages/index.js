import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Singh | Portfolio</title>
        <meta name="description" />
      </Head>

      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-4 md:pt-8 xl:pt-0'>
          <div className='flex w-full flex-col items-center justify-between gap-10 xl:flex-row xl:gap-0'>
            <div className='flex w-full justify-center xl:w-1/2 xl:justify-start'>
              <Image
                src={profilePic}
                alt="Aditya Singh"
                className="ml-4 h-auto w-72 sm:w-80 md:w-96 lg:w-[420px] xl:w-[500px]"
                priority
                sizes="(max-width: 768px) 70vw,
                  (max-width: 1200px) 40vw,
                  35vw"
              />
            </div>
            <div className='flex w-full flex-col items-center self-center text-center xl:w-1/2 xl:items-start xl:text-left'>
              <AnimatedText text="Turning Vision Into Reality Through Code & Design." className='!text-4xl sm:!text-5xl xl:!text-6xl !text-center xl:!text-left' />
              <p className='my-4 text-sm font-medium sm:text-base'>
                Frontend developer specializing in modern, responsive web interfaces.
                Focused on building intuitive AI/ML dashboards and data-driven applications.
                Passionate about creating seamless user experiences with React.js and modern web technologies.
              </p>
              <div className='mt-2 flex flex-wrap items-center justify-center gap-4 self-center xl:justify-start xl:self-start'>
                <Link href="/RESUME.pdf" target={'_blank'} passHref
                  className="flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-base font-semibold text-light hover:border-dark hover:bg-light hover:text-dark sm:text-lg 
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:official.aditya.singh.343@gmail.com" target={'_blank'} passHref
                  className='text-base font-medium capitalize text-dark underline dark:text-light sm:text-lg'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 hidden w-24 xl:block'>
          <Image src={lightBulb} alt="Aditya Singh" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
