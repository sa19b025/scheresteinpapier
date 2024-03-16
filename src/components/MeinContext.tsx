import { createContext, useContext, useState } from "react";

interface MeinContextType {
  locale: string;
  setLocale: (locale: string) => void;
  prediction: string;
  setPrediction: (prediction: string) => void;
}

const MeinContext = createContext<MeinContextType | undefined>(undefined);

export const useLocale = () => {
  const context = useContext(MeinContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a ContextProvider");
  }
  return context;
};

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState("en");
  const [prediction, setPrediction] = useState("");

  return (
    <MeinContext.Provider
      value={{ locale, setLocale, prediction, setPrediction }}
    >
      {children}
    </MeinContext.Provider>
  );
};
