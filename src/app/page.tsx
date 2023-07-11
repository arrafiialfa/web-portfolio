import Image from 'next/image';
import Timeline from "@/components/Timeline";
import {experiences} from "@/contents"
export default function Home() {

  return (
    <div className={`bg-white text-gray-900 min-h-screen`}>
    <header className="max-w-6xl mx-auto py-12 px-4 sm:px-12 lg:px-">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">Arrafii Alfa</div>
        <div>Projects</div>
        <div>About Me</div>
        <div>Get in touch</div>
        <div>D/L MODE</div>
      </div>
    </header>

    <main className=" max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <section className="mb-12 flex justify-between gap-6 items-center">
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

        <section className="mb-12 ">
          <h2 className="text-2xl font-semibold mb-3">Work Experiences</h2>
          <Timeline items={experiences} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Completed Projects</h2>
          <div className="flex space-x-4">
            {/* Project 1 */}
            <div className="flex flex-col items-center">
              <Image
              width={300}
              height={200}
                src="https://via.placeholder.com/300x200"
                alt="Project 1"
                className="rounded-lg mb-2"
              />
              <h4 className="text-lg font-semibold">Project 1</h4>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col items-center">
              <Image
              width={300}
              height={200}
                src="https://via.placeholder.com/300x200"
                alt="Project 2"
                className="rounded-lg mb-2"
              />
              <h4 className="text-lg font-semibold">Project 2</h4>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col items-center">
              <Image
              width={300}
              height={200}
                src="https://via.placeholder.com/300x200"
                alt="Project 3"
                className="rounded-lg mb-2"
              />
              <h4 className="text-lg font-semibold">Project 3</h4>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-8">
            Hi! My name is Rafi, and I&apos;m a Full-Stack Web Developer. I have gained extensive experience in developing and maintaining web applications using various languages, frameworks, and databases.
          </p>

          {/* Rest of the content */}
        </section>
      </div>
    </main>

    <footer className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-200 text-gray-700">
      <p className="text-center">&copy; {new Date().getFullYear()} Rafi&apos;s Portfolio. All rights reserved.</p>
    </footer>
  </div>
  )
}
