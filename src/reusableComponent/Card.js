


 const Card=(props)=>{

    const {name,email}=props
    return (
      <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg mt-4">
        <div className="bg-white p-7 flex flex-col items-center justify-center rounded-md">
          <h1 className="font-bold text-xl mb-2">{name}</h1>
          <p>{email}</p>
        </div>
      </div>
    );
}
export default Card
