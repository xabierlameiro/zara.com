import { render, screen } from "@/test";

import AudioCard from "..";

describe("AudioCard", () => {
    it.skip("should render audio card with title, description, sponsored and player", () => {
        render(<AudioCard />);
        expect(screen.getByTestId("audio-card")).toBeInTheDocument();
        expect(screen.getByTestId("audio-card-title")).toBeInTheDocument();
        expect(
            screen.getByTestId("audio-card-description")
        ).toBeInTheDocument();
        expect(screen.getByTestId("audio-card-sponsored")).toBeInTheDocument();
        expect(screen.getByTestId("audio-card-player")).toBeInTheDocument();
    });
});
