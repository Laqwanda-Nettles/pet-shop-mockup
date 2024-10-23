import PropTypes from "prop-types";

export default function PetHeroText(props) {
  const { title, description } = props;
  return (
    <div className="flex flex-col justify-evenly gap-10 items-start">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-3xl">{description}</p>
    </div>
  );
}

PetHeroText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
