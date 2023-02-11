import { render, screen } from "@/test";

import PodCastDetail from "../src/pages/podcast/[podcastId]";

describe("PodCastDetail", () => {
    it.skip("Should render sidebar, episode-counter and list", () => {
        render(<PodCastDetail />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        expect(screen.getByTestId("episode-counter")).toBeInTheDocument();
        expect(screen.getByTestId("episode-list")).toBeInTheDocument();
    });
});
