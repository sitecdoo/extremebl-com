import { createChallengeAction } from "@/components/contact/contact.actions";

export const getChallenge = async () => {
  try {
    const challenge = await createChallengeAction();
    return new Response(JSON.stringify(challenge), {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
