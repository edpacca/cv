import { test, describe, expect } from "vitest";
import cvData from "../data/cv.json";

describe("cv data", () => {

    const fields = [
        cvData.profile.address,
        cvData.profile.phone,
    ]

    fields.forEach((field) => {
        test(`field should be blank`, () => {
            expect(field).toEqual("")
        });
    });

    cvData.references.forEach((reference) => {
        test("reference contact should be blank", () => {
            expect(reference.email).toEqual("")
        });
    });

});