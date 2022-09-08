import { Image } from "./Image";
import { Prices } from "./Prices";

export interface Article {
	name: string;
	variantName: string;
	prices: Prices;
	images: Image[];
}
