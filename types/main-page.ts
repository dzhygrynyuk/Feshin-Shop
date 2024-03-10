import { StaticImageData } from "next/image";
import { IProduct } from "./common";

export interface IHeroSlide {
    id?: number;
    image: StaticImageData;
    title: string;
}

export type IHeroSlideTooltip = IHeroSlide;

export interface IMainSectionProps {
    title: string;
    goods: IProduct[];
    spinner: boolean;
};