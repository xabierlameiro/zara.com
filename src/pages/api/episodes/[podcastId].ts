import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const { podcastId } = req.query;

    const url = new URL(
        `${process.env.API_ALLORIGINS}/get?url=${encodeURIComponent(
            `${process.env.ITUNES_DOMAIN}/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`
        )}`
    );

    try {
        const response = await fetch(url)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok.');
            })
            .then((data) => JSON.parse(data.contents)?.results)
            .then(([detail, ...rest]) => {
                if (!res) throw new Error(`No episodes found ${rest}`);

                const episodes = rest?.map((episode: any) => ({
                    podcastId: episode.collectionId,
                    name: episode.trackName,
                    description: episode.description,
                    date: episode.releaseDate,
                    duration: episode.trackTimeMillis,
                    track: episode.previewUrl,
                    id: episode.trackId,
                }));
                // TODO :review this part
                return {
                    detail: {
                        url: `/podcast/${detail.collectionId}`,
                        img: {
                            width: 400,
                            height: 400,
                            src: detail.artworkUrl600,
                            alt: detail.collectionName,
                        },
                        title: detail.collectionName,
                        author: detail.artistName,
                        description: detail.description,
                    },
                    episodes,
                };
            });

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ err: err });
    }
}
