import ReusableComponent from "./Card"
const data = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "leannegraham@gmail.com",
  },
  {
    id: 2,
    name: "Erwin Howell",
    email: "erwinhowell@gmail.com",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementinebauch@gmail.com",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "patricialebsack@gmail.com",
  },
];



const App = () => {
  return (
    <>
    {data.map((data,index)=>{
      return (

          <ReusableComponent key={index} name={data.name} email={data.email} />
   
      )

    })}
    </>
  );
};
export default App;
