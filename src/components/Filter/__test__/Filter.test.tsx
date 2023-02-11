import { render, screen } from "@/test";

import Filter from "..";

describe("Filter", () => {
    it.skip("should render filter with placeholder and counter", () => {
        render(<Filter />);
        expect(
            screen.getByPlaceholderText("Filter podcasts...")
        ).toBeInTheDocument();
        expect(screen.getByTestId("filter-counter")).toBeInTheDocument();
    });
});
