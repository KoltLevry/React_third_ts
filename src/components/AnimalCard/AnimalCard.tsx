import { AnimalCardProps } from "./types";
import { AnimalCardWrapper, CardImage, AnimalName, AnimalSpecies } from "./styles";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <AnimalName>{animalName}</AnimalName>
      <AnimalSpecies>{animalSpecies}</AnimalSpecies>
      <CardImage src={animalImg} />
      {children}
    </AnimalCardWrapper>
  );
}

export default AnimalCard;