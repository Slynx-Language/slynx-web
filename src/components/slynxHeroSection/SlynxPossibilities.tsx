import { TerminalSquare } from "lucide-react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "../ui/item";

export default function SlynxPossibilities() {
  const POSSIBILITES = [
    {
      icon: TerminalSquare,
      title: "Modern UIs",
      description:
        "Create buttery smooth 120fps interfaces with our declarative UI engine.",
    },
    {
      icon: TerminalSquare,
      title: "Componentization",
      description:
        "Modular architecture designed for massive team collaboration and reuse.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10 items-start justify-center">
      <h2 className="text-4xl font-bold">Key Features & Possibilities</h2>

      <ItemGroup className="max-w-[90%]">
        {POSSIBILITES.map((possibility) => (
          <Item key={possibility.title} variant="muted">
            <ItemContent>
              <ItemTitle className="text-2xl font-semibold">
                {possibility.title}
              </ItemTitle>
              <ItemDescription className="text-lg">
                {possibility.description}
              </ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
