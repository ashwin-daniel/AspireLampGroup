import { User } from "../user/User";

export type Member = {
  ace: string;
  createdAt: Date;
  dob: Date | null;
  doj: Date | null;
  email: string;
  firstName: string;
  gender?: "male" | "female" | null;
  id: string;
  lastName: string;
  updatedAt: Date;
  users?: Array<User>;
};
