import { z } from "zod";

export const createReponseSchema = ({
  id,
  type,
  attributes,
  relationships = z.object({}),
  included = z.array(z.NEVER),
  meta = z.object({}),
}: {
  id: z.ZodString;
  type: z.ZodLiteral<string>;
  attributes: z.ZodObject<z.ZodRawShape>;
  relationships?: z.ZodObject<z.ZodRawShape>;
  included?: z.ZodArray<z.ZodObject<z.ZodRawShape>>;
  meta?: z.ZodObject<z.ZodRawShape>;
}) =>
  z.object({
    jsonapi: z.object({ version: z.string().default("1.0") }),
    meta: meta,
    data: z.object({
      type: type,
      id: id,
      attributes: attributes,
      relationships: relationships,
    }),
    included: included,
  });

export const createEntitySchema = ({
  id,
  type,
  attributes,
}: {
  id: z.ZodString;
  type: z.ZodLiteral<string>;
  attributes: z.ZodObject<z.ZodRawShape>;
}) =>
  z.object({
    id: id,
    type: type,
    attributes: attributes,
  });
