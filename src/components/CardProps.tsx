import PropTypes from "prop-types";

type CardProps = {
  bg: string;
  textColor: string;
  children: React.ReactNode;
};

const Card = ({ bg, textColor, children }: CardProps) => {
  return (
    <div
      className={`size-32 ${
        bg ? `${bg}` : "bg-blue-400"
      } flex items-center justify-center `}
    >
      <h1 className={`${textColor ? `${textColor}` : "text-neutral-950"}`}>
        {" "}
        {children ? `${children}` : "Card"}
      </h1>
    </div>
  );
};

Card.propTypes = {
  bg: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.string,
};

export default Card;
