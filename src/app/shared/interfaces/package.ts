export interface IPackage {
  name: string;
  version: string;
  description: string;
  main: string;
  directories: any[];
  scripts: any[];
  repository: {
    type: string,
    url: string
  },
  keywords: string[];
  author: string;
  license: string;
  homepage: string;
  dependencies: any[],
  devDependencies: any[]
}


export interface IDependency {
  name: string;
  version: string;
}
