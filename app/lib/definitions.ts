export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

export type Techno = {
  id: string;
  name: string;
  image_url: string;
}

export type NewProject = {
  title: string;
  description: string;
  image_url: string;
}
