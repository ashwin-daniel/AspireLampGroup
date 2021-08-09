export type EventCreateInput = {
  eventOn?: Date | null;
  title?: string | null;
  type: "birthday" | "workrsary" | "meeting" | "activity";
};
