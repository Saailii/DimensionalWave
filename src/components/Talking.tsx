import f from "../assets/f.png";
import k from "../assets/k.png";
import x from "../assets/x.png";

const Talking = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-cyan-50">
      <div className="flex items-start justify-center px-6 py-8 max-md:flex-col md:items-center">
        <img src={f} alt="" className="rounded-md md:order-2 md:size-2/6" />
        <div className="md:px-10">
          <h2 className="py-2 text-xl font-bold">NEW UPDATE</h2>
          <p>
            Sentez votre souffle, calme et régulier, ancrant votre esprit dans
            le moment présent. Laissez les pensées errantes s'évaporer, tandis
            que vous cultivez la paix intérieure.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center px-6 py-8 max-md:flex-col md:items-center  ">
        <img src={k} alt="" className=" rounded-md  md:size-2/6 " />
        <div className="md:px-10">
          <h2 className="py-2 text-xl font-bold">Disposible Test</h2>
          <p>
            Imaginez-vous enveloppé dans une lumière douce et apaisante,
            libérant toute tension et stress. Respirez profondément et laissez
            chaque souffle vous guider vers un état de sérénité profonde.
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center px-6 py-8 max-md:flex-col md:items-center">
        <img src={x} alt="" className="rounded-md  md:order-2 md:size-2/6" />
        <div className="md:px-10">
          <h2 className="py-2 text-xl font-bold">A new Area</h2>
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
