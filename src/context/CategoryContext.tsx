import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";

type Props = {
  children: any;
}

type IContext = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}
export const CategoryContext = createContext({} as IContext);


export function CategoryProvider({ children }){
  const [selected, setSelected] = useState("Beef");
  return (
    <CategoryContext.Provider value={{ selected, setSelected }}>
      {children}
    </CategoryContext.Provider>
  )
};
