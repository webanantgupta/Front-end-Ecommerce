import data from "../data/Whychoose";

const Choose = () => {
  console.log(data);

  return (
    <div className="flex bg-slate-200 justify-evenly items-center p-10">
      <h2 className="text-4xl font-semibold">Why choose us ?</h2>

      {data?.map((obj) => {
        const Icon = obj.symbol;

        return (
            <div className="flex gap-2">

          <div key={obj.id} className=" flex justify-between  items-center px-4 bg-blue-500 rounded-xl" >
            {Icon && <Icon className="text-2xl text-white "/>}
          </div>

            <div className="flex flex-col ">
              <h2 className="text-xl font-semibold">{obj.title}</h2>
              <p className="">{obj.content}</p>
            </div>
            </div>

        );
      })}
    </div>
  );
};

export default Choose;
