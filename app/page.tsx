/* eslint-disable react/no-unescaped-entities */
import QuoteMachine from './quote-machine';

export default function Home() {
  return (
    <main>
      <div className="text-3xl font-bold ">Hi!</div>
      <div className="text-xl">My name is Codie and I'm a fullstack web developer.</div><br/>
      <div className="flex justify-center">
        <QuoteMachine />
      </div>
    </main>
  )
}
