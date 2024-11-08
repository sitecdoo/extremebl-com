"use client";

import { PropsWithChildren, createContext, useContext } from "react";

type Dict = {
  [key: string]: string | Dict;
};

const createDictionaryProvider = <T extends Dict>() => {
  const DictionaryContext = createContext<T | null>(null);

  type DictionaryProviderProps = PropsWithChildren<{
    dict: T;
  }>;

  const DictionaryProvider = ({ children, dict }: DictionaryProviderProps) => {
    return (
      <DictionaryContext.Provider value={dict}>
        {children}
      </DictionaryContext.Provider>
    );
  };

  const useDictionary = () => {
    const dict = useContext(DictionaryContext);
    if (!dict) {
      throw new Error(
        "useDictionary must be used within a corresponding DictionaryProvider",
      );
    }
    return dict;
  };

  return { DictionaryProvider, useDictionary };
};

export default createDictionaryProvider;
