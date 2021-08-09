export type MemberCreateInput = {
  ace: string;
  dob?: Date | null;
  doj?: Date | null;
  email: string;
  firstName: string;
  gender?: "male" | "female" | null;
  lastName: string;
};
