import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Page from "../src/home";

describe("app", () => {
	it("renders correctly", () => {
		const tree = renderer.create(
			<Page />
		);
	});

	it("Snapshot matches", () => {
		expect(renderer.create(
			<Page />
		)).toMatchSnapshot();
	});
});
