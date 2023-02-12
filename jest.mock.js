jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '/',
            query: '',
            asPath: '',
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn(),
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null),
        };
    },
}));

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
