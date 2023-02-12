import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<any>
): Promise<void | { error: Error }> {
    const endpoint = new URL(`${process.env.ITUNES_DOMAIN}/us/rss/toppodcasts/limit=100/genre=1310/json`);

    try {
        const response = await (await fetch(endpoint)).json();

        if (!response || !response.feed || !response.feed.entry) {
            throw new Error('No podcasts found');
        }

        const podcasts = response.feed.entry.map((podcast: any) => ({
            url: `/podcast/${podcast.id.attributes['im:id']}`,
            img: {
                width: podcast['im:image'][2].attributes.height,
                height: podcast['im:image'][2].attributes.height,
                src: podcast['im:image'][2].label,
                alt: podcast['im:name'].label,
            },
            title: podcast['im:name'].label,
            author: podcast['im:artist'].label,
        }));

        res.status(200).json({
            ...podcasts,
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
