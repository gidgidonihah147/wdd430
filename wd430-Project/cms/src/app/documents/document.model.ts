export class Document {
    public id: string;
    public name: string;
    public description: string;
    public url: string;
    public children: string;

  constructor(
    id: string,
    name: string,
    description: string,
    url: string,
    children: string
  ) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.url = url;
    this.children = children;
  }
}
