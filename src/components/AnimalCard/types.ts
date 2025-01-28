import { ReactNode } from "react";

export interface AnimalCardProps {
  animalName: string, 
  animalSpecies: string, 
  animalImg: string, 
  children?: ReactNode,
  title?: string,
  content?: string,
  highlighted?: boolean,
}