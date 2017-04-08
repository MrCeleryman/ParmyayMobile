import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../../src/components";

describe("app", () => {
	it("renders correctly", () => {
		const tree = renderer.create(
			<Button />
		);
	});

	it("Snapshot matches", () => {
		expect(renderer.create(
			<Button />
		)).toMatchSnapshot();
	});
});
