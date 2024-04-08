export default function Intro() {
  return <div id='intro' 
    className='bg-slate-800 p-2 flex flex-row md:flex-col max-h-fit
    md:max-w-min rounded-3xl rounded-b-none md:rounded-3xl md:rounded-r-none'
  >
    <div id='portrait' className='flex flex-col sm:flex-row justify-around m-1'>
      <img src='/portrait.jpg'
        className='rounded-full max-h-28 max-w-28 lg:max-h-52 lg:max-w-52 shadow-lg
        ring-1 ring-yellow-600'
      />
      <div id='social' className='p-2 flex flex-row sm:flex-col 
        justify-between lg:justify-around'
      >
        <a href='mailto:cosh@mosh.works'>
          <img src='./icons/email-icon.jpg' 
            className='min-w-6 max-w-6 hover:scale-125'
          />
        </a>
        <a href='https://github.com/codie-sharp'>
          <img src='./icons/github-icon.jpg' 
            className='min-w-6 max-w-6 hover:scale-125'
          />
        </a>
        <a href='https://www.linkedin.com/in/codiesharp/'>
          <img src='./icons/in-icon.jpg' 
            className='min-w-6 max-w-6 hover:scale-125'
          />
        </a>
      </div>
    </div>
    <div id='about' className='bg-slate-900 p-4 flex rounded-3xl m-1 
      sm:text-xl lg:text-2xl max-h-full overflow-auto shadow-lg'
    >
      Hey! I'm Codie Sharp, a father, husband, and fullstack web dev.
    </div>
  </div>
}