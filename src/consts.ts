import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Gabriel Taufer",
  EMAIL: "gabriel@taufer.dev",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "I'm the kind of person who takes things apart just to see how they work - and sometimes, to figure out why they don't.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Career",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/gabriel-taufer"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/gabriel-taufer/",
  },
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/gabriel.taufer",
  }
];
