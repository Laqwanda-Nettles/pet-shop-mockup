import PetCard from './PetCard';

const meta = {
  component: PetCard,
};

export default meta;

export const Default = {
  args: {
    emoji: "🐕",
    info: "O FindAFriend e um produto desenvolvido para voce encontrar o animal de estimacao ideal ao seu estilo de vida!"
  }
};

export const DogEnglish = {
  args: {
    emoji: "🐕",
    info: "FindAFriend is a product developed to help you find the ideal pet for your lifestyle!"
  }
};

export const Cat = {
  args: {
    emoji: "🐈",
    info: "NGOs register pets available for adoption, providing details such as size, energy level, independence level, sociability, and gender."
  }
};

export const SeeingEyeDog = {
  args: {
    emoji: "🦮",
    info: "Filter the pets according to your preferences and lifestyle. Then just contact the NGO to schedule a visit and meet your perfect match in person!"
  }
};