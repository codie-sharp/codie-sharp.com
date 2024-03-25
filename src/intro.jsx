export default function Intro() {
  return <div id='intro' 
    className='bg-slate-800 p-2 flex flex-row md:flex-col max-h-fit
    md:max-w-min rounded-3xl rounded-b-none md:rounded-3xl md:rounded-r-none'
  >
    <div id='portrait' className='flex flex-col sm:flex-row justify-around'>
      <img src='/portrait.jpg'
        className='rounded-full max-h-28 max-w-28 lg:max-h-52 lg:max-w-52'
      />
      <div id='social' className='p-2 flex flex-row sm:flex-col 
        justify-between lg:justify-around'
      >
        <a href='mailto:codie.sharp@gmail.com'>
          <img src='./icons/email-icon.jpg' 
            className='min-w-6 max-w-6 lg:max-w-8'
          />
        </a>
        <a href='https://github.com/codie-sharp'>
          <img src='./icons/github-icon.jpg' 
            className='min-w-6 max-w-6 lg:max-w-8'
          />
        </a>
        <a href='https://www.linkedin.com/in/codiesharp/'>
          <img src='./icons/in-icon.jpg' 
            className='min-w-6 max-w-6 lg:max-w-8'
          />
        </a>
      </div>
    </div>
    <div id='about' className='bg-slate-900 p-4 flex rounded-3xl 
      m-2 text-md sm:text-xl lg:text-2xl'
    >
      Hey! I'm Codie Sharp, a father, husband, and fullstack web dev.
    </div>
  </div>
}