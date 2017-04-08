import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Home from "../src/home";

describe("app", () => {
	it("renders correctly", () => {
		const tree = renderer.create(
			<Home />
		);
	});

	it("Snapshot matches", () => {
		expect(renderer.create(
			<Home />
		)).toMatchSnapshot();
	});
});
