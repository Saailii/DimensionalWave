import k from "../assets/k.png";
import f from "../assets/f.png";
import x from "../assets/x.png";

const Talking = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-cyan-50">
      <div className="flex max-md:flex-col justify-center items-start px-6 py-8 md:items-center">
        <img src={f} alt="" className="rounded-md md:size-2/6 md:order-2" />
        <div className="md:px-10">
          <h2 className="text-xl font-bold py-2">NEW UPDATE</h2>
          <p>
            Sentez votre souffle, calme et régulier, ancrant votre esprit dans
            le moment présent. Laissez les pensées errantes s'évaporer, tandis
            que vous cultivez la paix intérieure.
          </p>
        </div>
      </div>
      <div className="flex max-md:flex-col justify-center items-start px-6 py-8 md:items-center  ">
        <img src={k} alt="" className=" rounded-md  md:size-2/6 " />
        <div className="md:px-10">
          <h2 className="text-xl font-bold py-2">Disposible Test</h2>
          <p>
            Imaginez-vous enveloppé dans une lumière douce et apaisante,
            libérant toute tension et stress. Respirez profondément et laissez
            chaque souffle vous guider vers un état de sérénité profonde.
          </p>
        </div>
      </div>
      <div className="flex max-md:flex-col justify-center items-start px-6 py-8 md:items-center">
        <img src={x} alt="" className="rounded-md  md:size-2/6 md:order-2" />
        <div className="md:px-10">
          <h2 className="text-xl font-bold py-2">A new Area</h2>
          <p>
            Visualisez un jardin intérieur luxuriant, où chaque fleur représente
            une pensée paisible. Marchez parmi elles, sentez leur douce
            fragrance et laissez votre esprit s'apaiser dans ce havre de
            tranquillité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Talking;
