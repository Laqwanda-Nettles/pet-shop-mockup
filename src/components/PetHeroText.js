import PropTypes from "prop-types";

export default function PetHeroText(props) {
  const { title, description } = props;
  return (
    <div className="flex flex-col justify-between gap-5">
      <h1 className="text-5xl font-bold leading-tight">{title}</h1>
      <p className="text-3xl leading-normal">{description}</p>
    </div>
  );
}

PetHeroText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
