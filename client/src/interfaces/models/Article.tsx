import { Image } from "./Image";
import { Prices } from "./Prices";

export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};
