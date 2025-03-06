// components/icons.ts
import { IconType } from "react-icons";
import { MdCarRepair } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { GiCargoCrane } from "react-icons/gi";

export type IconKeys = "fileSearch" | "barChart" | "settings";

export const Icons: Record<IconKeys, IconType> = {
  fileSearch: MdCarRepair,
  barChart: FaGasPump,
  settings: GiCargoCrane,
};
