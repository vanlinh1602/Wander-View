export type Ward = {
  name: string;
  difficultyArea?: boolean;
  specialArea?: boolean;
};

export type District = {
  name: string;
  wards?: CustomObject<Ward>;
};

export type Province = {
  name: string;
  districts: CustomObject<District>;
};

export type Cities = CustomObject<Province>;
