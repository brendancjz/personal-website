export class Project {
  name: string | undefined;
  date: string | undefined;
  oneLiner: string | undefined;
  description: string | undefined;
  techUsed: string[] | undefined;
  image: string | undefined;
  action: string | undefined;
  actionLink: string | undefined;
  githubLink: string | undefined;

  constructor(name?: string, date?: string, oneLiner?: string, description?: string,
    techUsed?: string[], image?: string, action?: string, actionLink?: string, githubLink?: string) {
      this.name = name;
      this.date = date;
      this.oneLiner = oneLiner;
      this.description = description;
      this.techUsed = techUsed;
      this.image = image;
      this.action = action;
      this.actionLink = actionLink;
      this.githubLink = githubLink;
  }
}
