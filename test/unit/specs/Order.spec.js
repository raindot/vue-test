import Vue from "vue";
import Order from "@/components/Order";

describe("TestDataComponent", () => {
  it("has a created hook", () => {
    expect(typeof Order.created).toEqual("function");
  });
});
