import { render, screen } from "@/test";

import Sidebar from "..";

describe("Sidebar", () => {
    it.skip("should render sidebar", () => {
        render(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        expect(screen.getByTestId("sidebar-image")).toBeInTheDocument();
        expect(screen.getByTestId("sidebar-title")).toBeInTheDocument();
        expect(screen.getByTestId("sidebar-author")).toBeInTheDocument();
        expect(screen.getByTestId("sidebar-description")).toBeInTheDocument();
    });
});
