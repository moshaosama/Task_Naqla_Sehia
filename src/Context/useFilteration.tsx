import { createContext, useContext, useState, type ReactNode } from "react";

import { useForm } from "react-hook-form";

interface FilterationContextData {
  register: any;
  handleSubmit: any;
  handleSetFilteration: () => void;
  Category: string;
}

interface FilterationContextProps {
  children: ReactNode;
}

const FilterationContext = createContext<null | FilterationContextData>(null);

export const FilterationProvider = ({ children }: FilterationContextProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      Category: "",
    },
  });
  const [Category, setCategory] = useState("all");

  const handleSetFilteration = (data?: any) => {
    console.log(data);
    setCategory(data.Category);
  };

  return (
    <FilterationContext.Provider
      value={{ register, handleSetFilteration, handleSubmit, Category }}
    >
      {children}
    </FilterationContext.Provider>
  );
};

export const useFilteraionContext = () => {
  const context = useContext(FilterationContext);
  if (!context) {
    throw new Error(
      "useFilteraionContext must be used within an FilterationContext"
    );
  }
  return context;
};
