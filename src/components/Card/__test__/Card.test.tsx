import { render, screen, fireEvent } from "@/test";

import Card from "..";

describe("Card", () => {
    it.skip("should render card with image, name, author and the card is clickable", () => {
        render(<Card />);
        expect(screen.getByTestId("card")).toBeInTheDocument();
        expect(screen.getByTestId("card-image")).toBeInTheDocument();
        expect(screen.getByTestId("card-name")).toBeInTheDocument();
        expect(screen.getByTestId("card-author")).toBeInTheDocument();
        fireEvent.click(screen.getByTestId("card"));
    });
});
