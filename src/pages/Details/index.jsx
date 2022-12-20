import Description from "../../components/Details/Description";
import DetailsCard from "../../components/Details/DetailsCard";
import TokenActivity from "../../components/Details/TokenActivity";
import pic from "../../images/profile-img.png";
export default function Details() {
  let Data = [
    {
      Name: "Markus",
      id: "1",
      attribute: "100%",
      energy: "41.23%",
      Grade: "41.23%",
      Health: "41.23%",
      luck: "41.23%",
      type: "cat",
      owner: "DF1942",
      status: "Not for Sale",
      description: "Young alchemist and a great explorer. Fortune smiles at him, he always finds rich loot."  },
  ];

  return (


    <>
      <div className='flex justify-center'>
        <div className="flex gap-10 justify-center py-20 flex-col lg:flex-row w-[80%]">
          <div className="flex-1">
            <img src={pic} alt="" className="rounded-lg" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col items-center gap-10">
              <DetailsCard data={Data} />
              <Description data={Data} />
            </div>
          </div>
        </div>
      </div>
      <TokenActivity />
    </>
  );
}
