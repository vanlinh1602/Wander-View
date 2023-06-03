export type Category = {
  imgUrl: string;
  title: string;
  icon: string;
};

export type Address = {
  province: string;
  district?: string;
  ward?: string;
};

export type Location = {
  id: string;
  imgUrl: string;
  title: string;
  rating?: string;
  description: string;
  genre?: string;
  address: Address;
  catalogs: string[];
};
