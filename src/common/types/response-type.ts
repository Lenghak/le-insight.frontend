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
    data: createEntitySchema({ id, type, attributes }).extend({
      relationships: relationships ?? z.object({}),
    }),
    included: included ?? z.array(z.never()),
  });

export const createListResponseSchema = <
  A extends z.ZodObject<z.ZodRawShape>,
  R extends z.ZodObject<z.ZodRawShape>,
  I extends z.ZodArray<z.ZodObject<z.ZodRawShape>>,
  M extends z.ZodObject<z.ZodRawShape>,
>(params: {
  id: z.ZodString;
  type: z.ZodLiteral<string>;
  attributes: A;
  relationships?: R;
  included?: I;
  meta?: M;
}) => {
  const resSchema = createResponseSchema(params);
  const nonDataSchema = resSchema.omit({ data: true });
  const rawDataSchema = resSchema.pick({ data: true });

  return nonDataSchema.extend({
    data: z.array(rawDataSchema.shape.data),
  });
};

export const createEntitySchema = <A extends z.ZodObject<z.ZodRawShape>>({
  id,
  type,
  attributes,
}: {
  id: z.ZodString;
  type: z.ZodLiteral<string>;
  attributes: A;
}) =>
  z.object({
    id: id,
    type: type,
    attributes: attributes,
  });
