import { registerEnumType } from "@nestjs/graphql";

export enum EnumEventType {
  Birthday = "birthday",
  Workrsary = "workrsary",
  Meeting = "meeting",
  Activity = "activity",
}

registerEnumType(EnumEventType, {
  name: "EnumEventType",
});
