import { sqliteTable, text, integer } from "void/schema-d1";

export const runs = sqliteTable("runs", {
  id: text().primaryKey(),
});
