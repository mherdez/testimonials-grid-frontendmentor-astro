export interface Photo {
  file?: string;
  alt?: string;
  color?: string;
}

export interface UserInterface {
  name: string;
  clases: string[];
  photo: Photo;
  title: string;
  review: string;
}