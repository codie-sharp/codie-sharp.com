import './style.css'

export default function Intro() {
  return <div id='intro' 
  className='bg-slate-800 p-4 flex 
  flex-row lg:flex-col basis-1/3 lg:align-center
  rounded-3xl rounded-b-none lg:rounded-3xl lg:rounded-r-none'>

    <div id='portrait' className='flex justify-center'>
      <img src='/portrait.jpg'
        className='rounded-full max-w-28 max-h-28
          lg:max-w-40 lg:max-h-40'
      />
    </div>

    <div id='about' className='bg-slate-900 p-2 rounded-3xl'>
      Hey! I'm Codie Sharp, a father, husband, and fullstack web dev.
    </div>
  </div>
}