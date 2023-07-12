import Image from 'next/image';
import Timeline from "@/components/Timeline";
import Cards from "@/components/Cards"
import {experiences} from "@/contents"
import Layout from '@/Layout/Layout';
export default function Home() {
  return (
  <Layout>
    <main className="my-8">
      <div className='max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        <section className="mt-6 mb-12 flex flex-wrap sm:flex-nowrap justify-between gap-6 items-center">
          <div className="bg-slate-50 shadow rounded-lg py-6 px-8 basis-1/12 ">
            <h3 className="text-2xl mb-2 font-semibold">Hi! I&apos;m Rafi</h3>
            <p className="text-lg mb-6">A Full-Stack Web Developer passionate about creating impactful solutions.</p>
            <div className="flex space-x-4">
              <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
                Email
              </a>
              <a href="https://wa.me/1234567890" className="text-blue-600 hover:underline">
                WhatsApp
              </a>
              <a href="https://linkedin.com/in/arafiialfa" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/yourgithub" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>
          <div className=" basis-11/12 text-center mx-auto grow">
            <Image width={600} height={900} src="/hero_img.svg" alt="hero_img"   />
            <a className='text-xs text-blue-800' href="https://www.freepik.com/free-vector/programming-concept-illustration_7118756.htm#query=developer&position=0&from_view=search&track=sph?log-in=google">Image by storyset on Freepik</a> 
          </div>
        </section>
        <section className=" ">
          <h2 className="text-2xl font-semibold mb-3">Work Experiences</h2>
          <Timeline items={experiences} />
        </section>
      </div>

      <div className='bg-slate-700'>
        <section className="mb-12  py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
          <h2 className="text-2xl font-semibold mb-4">Completed Projects</h2>
          <Cards items={[]}/>
        </section>
      </div>
    </main>

    
  </Layout>
  )
}
