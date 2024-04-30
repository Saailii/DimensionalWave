import PropTypes from "prop-types";
const CardProps = (props) => {
  return (
    <div
      className={`size-32 ${
        props.bg ? `${props.bg}` : "bg-blue-400"
      } flex items-center justify-center `}
    >
      <h1
        className={`${
          props.textColor ? `${props.textColor}` : "text-neutral-950"
        }`}
      >
        {" "}
        {props.children ? `${props.children}` : "Card"}
      </h1>
    </div>
  );
};

CardProps.propTypes = {
  bg: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.string,
};

export default CardProps;
