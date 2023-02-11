import { render, screen } from "@/test";

import Layout from "..";

describe("Layout", () => {
    it.skip("should render layout with a header and, sidebar and main content", () => {
        render(<Layout />);
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        expect(screen.getByTestId("main-content")).toBeInTheDocument();
    });
});
