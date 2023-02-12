export type Podcast = {
    url: string;
    img: {
        width: number;
        height: number;
        src: string;
        alt: string;
    };
    title: string;
    author: string;
};

export type FilterProps = {
    collection: Array<Podcast>;
    placeHolder?: string;
};
