export default function Content() {
  return<div id='content' 
    className='bg-slate-700 p-4 flex basis-full flex-col 
    rounded-3xl rounded-t-none md:rounded-3xl md:rounded-l-none'
  >
    
    <div id='projects-heading' 
      className='bg-slate-900  p-4 rounded-3xl'
    >
      Projects
      <div id='projects-content'
        className='bg-slate-800'
      >
        Content goes here
      </div>
    </div>
    
    <div id='blog-heading'
      className='bg-slate-900  p-4 rounded-3xl'
    >
      Blog
      <div id='blog-content'
        className='bg-slate-800'
      >
        Content goes here
      </div>
    </div>
  </div>
}