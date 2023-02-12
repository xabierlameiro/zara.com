import { render, screen } from '@/test';

import AudioCard from '..';

describe('AudioCard', () => {
    it('should render audio card with title, description, sponsored and player', () => {
        render(<AudioCard name="Test name" description="Test description" track="https://test.com" />);
        expect(screen.getByTestId('audio-card')).toBeInTheDocument();
        expect(screen.getByTestId('audio-card-title')).toBeInTheDocument();
        expect(screen.getByTestId('audio-card-description')).toBeInTheDocument();
        expect(screen.getByTestId('audio-card-sponsored')).toBeInTheDocument();
        expect(screen.getByTestId('audio-card-player')).toBeInTheDocument();
    });
});
