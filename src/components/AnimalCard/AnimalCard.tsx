import { AnimalCardProps } from "./types";
import { AnimalCardWrapper, 
         CardImage, 
         AnimalName, 
         AnimalSpecies,
         CardTitle,
         CardContent } from "./styles";

function AnimalCard({ 
    animalName, 
    animalSpecies, 
    animalImg, 
    children, 
    title, 
    content, 
    highlighted = false}: AnimalCardProps) {
  return (
    <AnimalCardWrapper highlighted={highlighted}>
      <CardTitle>{title}</CardTitle>
      <AnimalName>{animalName}</AnimalName>
      <AnimalSpecies>{animalSpecies}</AnimalSpecies>
      <CardContent>{content}</CardContent>
      <CardImage src={animalImg} />
      {children}
    </AnimalCardWrapper>
  );
}

export default AnimalCard;