import { Bars } from "@/components/Icons";


export default function Navigation() {
  return (
    <header className=" max-w-6xl mx-auto py-12 px-6 sm:px-12 lg:px-24">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">AA</div>
        <div className='hidden sm:flex justify-between gap-x-4 items-center'>
          <div>Projects</div>
          <div>About Me</div>
          <div>Get in touch</div>
          <div>D/L MODE</div>
        </div>
        <div className='sm:hidden'>
          <Bars />
        </div>
      </div>
    </header>
  );
}
