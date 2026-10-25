export interface ProjectDataType {
  id: string;
  imageUrl: string;
  imageSrcSet?: string;
  title: string;
  description: string;
  framework: string;
  language: string;
  additionalTechnology: string;
  rating: number;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  problem?: string;
  role?: string;
  outcome?: string;
  process?: string[];
  technologies?: string[];
}
