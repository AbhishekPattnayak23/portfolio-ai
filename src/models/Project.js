/**
 * Model representing a GenAI project
 */
class Project {
  constructor(id, name, description, technologies, projectType, imageUrl, demoUrl, repoUrl, createdAt) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.technologies = technologies; // Array of tech tags
    this.projectType = projectType; // E.g., "Text Generation", "Image Generation", "Voice Assistant"
    this.imageUrl = imageUrl;
    this.demoUrl = demoUrl;
    this.repoUrl = repoUrl;
    this.createdAt = createdAt;
  }
}

export default Project;
