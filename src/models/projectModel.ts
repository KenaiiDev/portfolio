import { Document, Schema, model, Model, models } from "mongoose";

export type ProjectDocument = Document & {
  name: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  techStack: string[];
  image: Buffer;
};

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  liveUrl: { type: String, required: true },
  repoUrl: { type: String, required: true },
  techStack: { type: [String], required: true },
  image: { type: Buffer, required: true },
});

const Project =
  (models.Project as Model<ProjectDocument>) ||
  model<ProjectDocument>("Project", ProjectSchema);

export default Project;
