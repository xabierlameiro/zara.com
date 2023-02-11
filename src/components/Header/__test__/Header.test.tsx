import { render, screen } from "@/test";

import Header from "..";

describe("Header", () => {
    it.skip("should render header with a text and a mark", () => {
        render(<Header />);
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByText("Podcaster")).toBeInTheDocument();
        expect(screen.getByTestId("header-mark")).toBeInTheDocument();
    });
});
