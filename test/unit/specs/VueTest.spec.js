import Vue from "vue";
import VueTest from "@/components/VueTest";

describe("TestDataComponent", () => {
  it("has a created hook", () => {
    expect(typeof VueTest.created).toEqual("function");
  });

  it("should set the correct default data", () => {
    expect(typeof VueTest.data).toEqual("function");
    const data = VueTest.data();
    expect(data.message).toEqual("hello!");
  });

  it("should correctly set the msg when created", () => {
    const vm = new Vue(VueTest).$mount();
    expect(vm.message).toEqual("bye!");
  });

  it("should render correct", () => {
    const Constructor = Vue.extend(VueTest);
    const vm = new Constructor().$mount();
    expect(vm.$el.textContent).toEqual("bye!");
  });

});
