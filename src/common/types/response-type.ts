import { z } from "zod";

export const createResponseSchema = <
  A extends z.ZodObject<z.ZodRawShape>,
  R extends z.ZodObject<z.ZodRawShape>,
  I extends z.ZodArray<z.ZodObject<z.ZodRawShape>>,
  M extends z.ZodObject<z.ZodRawShape>,
>({
  id,
  type,
  attributes,
  relationships,
  included,
  meta,
}: {
  id: z.ZodString;
  type: z.ZodLiteral<string>;
  attributes: A;
  relationships?: R;
  included?: I;
  meta?: M;
}) =>
  z.object({
    jsonapi: z.object({ version: z.string().default("1.0") }),
    meta: meta ?? z.object({}),
    data: z.object({
      type: type,
      id: id,
      attributes: attributes,
      relationships: relationships ?? z.object({}),
    }),
    included: included ?? z.array(z.never()),
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
