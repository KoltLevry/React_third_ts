import { AnimalCardProps } from "./types";
import { AnimalCardWrapper, CardImage } from "./styles";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <CardImage src={animalImg} />
      {children}
    </AnimalCardWrapper>
  );
}

export default AnimalCard;