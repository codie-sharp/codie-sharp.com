export default function Card({image, content, open}) {
  return <div className='bg-slate-900 m-2 flex flex-col
    rounded-3xl max-w-full md:min-w-80' onClick={open}
  >
    <img src={`${image}`} className='rounded-t-3xl'/>
    <div className='m-2 p-1.5 flex flex-wrap justify-around'>
      {content.map((item, i) => ( //() instead of {} returns!
        <div key={i} className='p-0.5'>
          {item}
        </div>
      ))}
    </div>
  </div>
}

// GPT efficiency suggestion:
// const renderContent = (item, i) => (
//   <div key={i} className="p-0.5">
//     {item}
//   </div>
// );

// return (
//   <div className="bg-slate-900 m-2 flex flex-col rounded-3xl max-w-full md:min-w-80">
//     {/* Rest of the card */}
//     <div className="m-2 p-1.5 flex flex-wrap justify-around">
//       {content.map(renderContent)}
//     </div>
//   </div>
// );
