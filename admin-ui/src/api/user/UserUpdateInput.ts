import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type UserUpdateInput = {
  details?: MemberWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
