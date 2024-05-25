


const Card=({data,error})=>{
    return (
      <div className="relative mx-auto w-[90%] max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg mt-4">
        <div className="bg-white p-7 flex flex-col items-center justify-center rounded-md">
           {error&&<h1 className="font-bold text-red-600 text-xl mb-2">{error}</h1>}
          <h1 className="font-bold text-xl mb-2">{data?data.name:""}</h1>
          <p>{data?data.name:""}</p>
        </div>
      </div>
    );
}
export default Card