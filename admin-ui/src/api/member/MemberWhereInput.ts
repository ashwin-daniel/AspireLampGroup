import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MemberWhereInput = {
  ace?: StringFilter;
  dob?: DateTimeNullableFilter;
  doj?: DateTimeNullableFilter;
  email?: StringFilter;
  firstName?: StringFilter;
  gender?: "male" | "female";
  id?: StringFilter;
  lastName?: StringFilter;
};
