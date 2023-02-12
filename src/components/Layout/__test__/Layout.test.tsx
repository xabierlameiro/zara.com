import { render, screen } from '@/test';

import Layout from '..';

describe('Layout', () => {
    it('should render layout with a header and, sidebar and main content', () => {
        render(
            <Layout>
                <div />
            </Layout>
        );
        expect(screen.getByTestId('podcast-header')).toBeInTheDocument();
        expect(screen.getByTestId('main-content')).toBeInTheDocument();
    });
});
