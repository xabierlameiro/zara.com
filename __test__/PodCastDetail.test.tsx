import { render, screen } from '@/test';

import PodCastDetail from '../src/pages/podcast/[podcastId]';

jest.mock('swr', () => {
    return {
        __esModule: true,
        default: () => {
            return {
                data: {
                    detail: {
                        url: 'https://www.google.com',
                        img: {
                            src: 'https://www.google.com',
                            alt: 'alt',
                            width: 100,
                            height: 100,
                        },
                        title: 'title',
                        author: 'author',
                        description: 'description',
                    },
                    episodes: [
                        {
                            id: '1',
                            podcastId: '1',
                            track: 'track',
                            name: 'name',
                            description: 'description',
                            duration: 'duration',
                            date: 'date',
                        },
                    ],
                },
            };
        },
    };
});

describe('PodCastDetail', () => {
    it('Should render sidebar, episode-counter and list', () => {
        render(<PodCastDetail />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('episode-list-counter')).toBeInTheDocument();
        expect(screen.getByTestId('episode-list-table')).toBeInTheDocument();
    });
});
