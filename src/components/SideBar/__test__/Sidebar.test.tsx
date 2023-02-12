import { render, screen } from '@/test';

import Sidebar from '..';

const props = {
    url: '/podcast/123',
    img: {
        width: 100,
        height: 100,
        src: 'https://picsum.photos/100/100',
        alt: 'alt',
    },
    title: 'title',
    author: 'author',
    description: 'description',
};

describe('Sidebar', () => {
    it('should render sidebar', () => {
        render(<Sidebar {...props} />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-image')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-title')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-author')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-description')).toBeInTheDocument();
    });
});
