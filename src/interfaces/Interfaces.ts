export interface CurrentUserContextType {
  example: string;
  verifyData: (data: string) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  authors: Author[];
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export interface Author {
  _id: String;
  name: String;
  age: Number;
  createdAt: Date;
  blogs: Blog[];
}

export interface Blog {
  id: Number;
  title: String;
  description: String;
  createdAt: Date;
}