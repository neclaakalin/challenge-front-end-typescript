export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const postTypeInitials = {
  userId: 0,
  id: -1,
  title: "",
  body: "",
};
