import configPromise from "@payload-config";
import { getPayload } from "payload";

export const GET = async () => {
  const [data] = await Promise.all([
    getPayload({
      config: configPromise,
    }),
    (
      await getPayload({
        config: configPromise,
      })
    ).find({
      collection: "users",
    }),
  ]);

  return Response.json(data);
};
