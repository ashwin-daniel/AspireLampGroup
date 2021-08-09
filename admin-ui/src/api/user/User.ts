import { Member } from "../member/Member";

export type User = {
  createdAt: Date;
  details?: Member | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
