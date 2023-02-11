import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse<any>) {
    const endpoint = new URL(`${process.env.ITUNES_DOMAIN}/us/rss/toppodcasts/limit=100/genre=1310/json`);

    try {
        const response = await (await fetch(endpoint)).json();

        // TODO: Pending model/clean the response
        res.status(200).json({
            ...response.feed.entry,
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
