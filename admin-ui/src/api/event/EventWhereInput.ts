import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EventWhereInput = {
  eventOn?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  type?: "birthday" | "workrsary" | "meeting" | "activity";
};
