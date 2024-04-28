import meditationImage1 from "../assets/meditation1.jpg";
import meditationImage2 from "../assets/meditation2.jpg";
import meditationImage3 from "../assets/meditation3.jpeg";

const Talking = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center flex-col items-center">
        <img src={meditationImage1} alt="" className="size-2/4" />
        <p>
          Sentez votre souffle, calme et régulier, ancrant votre esprit dans le
          moment présent. Laissez les pensées errantes s'évaporer, tandis que
          vous cultivez la paix intérieure.
        </p>
      </div>
      <div>
        <img src={meditationImage2} alt="" className="size-2/4" />
        <p>
          Imaginez-vous enveloppé dans une lumière douce et apaisante, libérant
          toute tension et stress. Respirez profondément et laissez chaque
          souffle vous guider vers un état de sérénité profonde.
        </p>
      </div>
      <div>
        <img src={meditationImage3} alt="" className="size-2/4" />
        <p>
          Visualisez un jardin intérieur luxuriant, où chaque fleur représente
          une pensée paisible. Marchez parmi elles, sentez leur douce fragrance
          et laissez votre esprit s'apaiser dans ce havre de tranquillité.
        </p>
      </div>
    </div>
  );
};

export default Talking;
