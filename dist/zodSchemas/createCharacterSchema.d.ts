import { z } from "zod";
declare const createCharacterSchema: z.ZodObject<{
    nickname: z.ZodString;
    race: z.ZodEnum<{
        human: "human";
        elf: "elf";
        dwarf: "dwarf";
        orc: "orc";
    }>;
}, z.core.$strip>;
export default createCharacterSchema;
//# sourceMappingURL=createCharacterSchema.d.ts.map