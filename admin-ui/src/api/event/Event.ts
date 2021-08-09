export type Event = {
  createdAt: Date;
  eventOn: Date | null;
  id: string;
  title: string | null;
  type?: "birthday" | "workrsary" | "meeting" | "activity";
  updatedAt: Date;
};
