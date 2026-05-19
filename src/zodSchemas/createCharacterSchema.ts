import { z } from "zod";
import { nicknameRegExp } from "@/constants/regularExpressions.js";

const createCharacterSchema = z.object({
  nickname: z
    .string({ error: "Nickname must be a string" })
    .regex(
      nicknameRegExp,
      "Nickname must be 3–24 characters and contain only letters, numbers, and underscores",
    ),
  race: z.enum(["human", "elf", "dwarf", "orc"], {
    error: "Race must be human, elf, dwarf, or orc",
  }),
});

export default createCharacterSchema;
