import { render, screen } from '@/test';

import EpisodeDetail from '../src/pages/podcast/[podcastId]/episode/[episodeId]';

describe('EpisodeDetail', () => {
    it('Should render sidebar and audio-card', () => {
        render(<EpisodeDetail />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('audio-card')).toBeInTheDocument();
    });
});
