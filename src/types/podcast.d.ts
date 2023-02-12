export type ImageType = {
    width: number;
    height: number;
    src: string;
    alt: string;
};

export type Podcast = {
    url: string;
    img: ImageType;
    title: string;
    author: string;
};

export type FilterProps = {
    collection: Array<Podcast>;
    placeHolder?: string;
};

export type SideBarProps = {
    url: string;
    img: ImageType;
    title: string;
    author: string;
    description: string;
};
