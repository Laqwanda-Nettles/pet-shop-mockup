import PropTypes from "prop-types";

// TODO: in storybook, create a story for this component
// update the value for src in the story
// The image is located in public/img/hero-dog.png
export default function PetHeroImage(props) {
  const { src } = props;
  return (
    <div className="bg-gradient-to-b from-rose-400 to-rose-600 rounded-2xl">
      <img src={src} alt="dog hero image" />
    </div>
  );
}

PetHeroImage.propTypes = {
  src: PropTypes.string.isRequired,
};
