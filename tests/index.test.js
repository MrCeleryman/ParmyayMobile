import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Index from "../src/index";

describe("app", () => {
	it("renders correctly", () => {
		const tree = renderer.create(
			<Index />
		);
	});

	it("Snapshot matches", () => {
		expect(renderer.create(
			<Index />
		)).toMatchSnapshot();
	});
});

