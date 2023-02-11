import { render, screen } from "@/test";
import HomePage from "../src/pages";

describe("HomePage", () => {
    it.skip("render your main with render 100 podcasts ", () => {
        render(<HomePage />);
        expect(screen.getAllByTestId("episode-card")).toHaveLength(100);
    });
});
