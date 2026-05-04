"use client";

import { useState } from "react";
import WhySlynxSection from "./SlynxLandingHeroSection";

type FeatureId = "simple" | "performance" | "data-oriented";

const featureCodeExamples: Record<FeatureId, string> = {
	simple: `
style Vertical(){
  grow_direction = Direction.Vertical;
}

component Header {
  Div {
    Text { text: "Some Website"}
    Div {
      GithubButton {}; Search {}; ThemeButton {};
    }
  }
}

component Website {
  Div {
    style: Vertical(),
    Header {}
    Body {}
    Footer {}
  }
}

func main():Component -> Website {};`,
	performance: `
struct Vec2 {
  x: float,
  y: float
}

const THREAD_COUNT:int = 8;

func main(): void{
  let mut data = [1000]Vec2(x: 0.0, y:0.0);
  let per_thread_indices = data.quantity() / THREAD_COUNT;
  for i in 0..THREAD_COUNT {
    let thread_index = per_thread_indices * i;
    let thread_end_index = per_thread_indices * (i+1);
    thread.spawn(_ -> {
      data[thread_index..thread_end_index].simd_add(data.quantity());
    });
  }
}`,
	"data-oriented": `struct Vec2 {
  x: float,
  y: float
}

func main(): void{
  let mut data = [1000]Vec2(x: 0.0, y:0.0);
  for data_handle in data {
    data.x = 5;
    data.y = data.x + data.y + data.index;
  }
}`,
};

export default function WhySlynxContainer() {
	const [selectedFeature, setSelectedFeature] = useState<FeatureId>("simple");

	const badges = [
		{
			id: "simple",
			text: "Simple",
		},
		{
			id: "performance",
			text: "Performance",
		},
		{
			id: "data-oriented",
			text: "Data Oriented",
		},
	];

	return (
		<WhySlynxSection
			title="Why"
			brandName="Slynx?"
			description="Experience a syntax that feels natural, a compiler that guides you, and performance that scales with your ambitions."
			badges={badges}
			activeTabId={selectedFeature}
			codeExamplesByBadgeId={featureCodeExamples}
			fileName="main.sx"
			typingSpeed={15}
			onBadgeSelect={(id) => setSelectedFeature(id as FeatureId)}
		/>
	);
}
