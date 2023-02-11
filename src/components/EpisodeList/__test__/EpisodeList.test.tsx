import { render, screen } from "@/test";

import EpisodeList from "..";

describe("EpisodeList", () => {
    it.skip("should render episode list and counter", () => {
        render(<EpisodeList />);
        expect(screen.getByTestId("episode-counter")).toBeInTheDocument();
        expect(screen.getByTestId("episode-list-title")).toBeInTheDocument();
        expect(screen.getByTestId("episode-list-date")).toBeInTheDocument();
        expect(screen.getByTestId("episode-list-duration")).toBeInTheDocument();
    });
});
