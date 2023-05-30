export type Category = {
  imgUrl: string;
  title: string;
  icon: string;
};

export type Location = {
  id: string;
  imgUrl: string;
  title: string;
  rating?: string;
  description: string;
  genre?: string;
  address: string;
  catalogs: string[];
};
