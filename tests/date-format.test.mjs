import test from "node:test";
import assert from "node:assert/strict";
import { formatDateText } from "../src/utils/date-format.ts";

test("Chinese membership years do not receive a duplicate 年 suffix", () => {
  assert.equal(formatDateText("自2011年", "zh"), "自2011年");
  assert.equal(formatDateText("2014年", "zh"), "2014年");
});

test("Chinese year ranges keep one suffix per year", () => {
  assert.equal(formatDateText("2011年–2014年", "zh"), "2011年–2014年");
});

test("other locales retain locale-aware year formatting", () => {
  assert.equal(formatDateText("since 2011", "en"), "since 2011");
});
