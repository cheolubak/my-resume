export interface Experience {
  id: string;
  name: string;
  start: string;
  end?: string;
  position: string;
  description: string;
  works: Work[];
  skills: Skill[];
  serviceLink?: string;
}

interface Work {
  id: string;
  title: string;
  description?: string;
}

interface Skill {
  id: string;
  title: string;
}
