import { Project } from "../../types";
import { project1 } from "./project1";
import { project2 } from "./project2";
import { project3 } from "./project3";

export const projects: Project[] = [
  project1,
  project2,
  project3
];

export * from "./project1";
export * from "./project2";
export * from "./project3";
