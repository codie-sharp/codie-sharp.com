import Accordion from "./components/accordion"

export default function Content() {
  return<div id='content' 
    className='bg-slate-700 p-1 flex basis-full flex-col 
    rounded-3xl rounded-t-none md:rounded-3xl md:rounded-l-none'
  >
    <Accordion title={'Projects'} content={'Content goes here'}/>
    <Accordion title={'Blog'} content={'Content goes here'}/>
  </div>
}