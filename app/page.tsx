/* eslint-disable react/no-unescaped-entities */
import QuoteMachine from './quote-machine';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <div id='intro' className='p-4 m-4 text_shadow border_' style={{background: 'linear-gradient(to left top, rgb(20 0 20), rgb(100 20 100))'}}>
        <div className="text-3xl font-bold">Hi!</div>
        <div className="text-xl font-bold">My name is Codie and I'm a fullstack web developer.</div>
      </div>
      <div className="m-4 flex justify-center" style={{minWidth: '80%', maxWidth: '80%'}}>
        <QuoteMachine />
      </div>
    </main>
  )
}
