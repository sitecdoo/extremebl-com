import { useEffect, useState } from "react";
import { solveChallenge } from "altcha-lib";
import type { Challenge } from "altcha-lib/types";
import { getChallenge } from "@/utils/get-challenge";

export const useChallenge = () => {
  const [challenge, setChallenge] = useState<Challenge | undefined>(undefined);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    const createChallenge = async () => {
      const response = await getChallenge();
      const data = await response.json();
      setChallenge(data);
    };
    createChallenge();
  }, []);

  const getSolution = async () => {
    if (!challenge) return;
    setIsVerifying(true);
    const { challenge: ch, salt } = challenge;
    const solution = await solveChallenge(ch, salt).promise;
    setIsVerifying(false);
    if (!solution) return;

    // return solved challenge payload
    return { ...challenge, number: solution.number };
  };

  return { isVerifying, getSolution };
};
