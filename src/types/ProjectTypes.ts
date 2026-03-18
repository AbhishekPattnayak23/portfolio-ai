export interface ProjectData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectLink?: string;
  githubLink?: string;
  featured: boolean;
}
