import Vue from "vue";
import PropsTest from "@/components/PropsTest";

function getRenderedText(component, data) {
  const Constructor = Vue.extend(component);
  const vm = new Constructor({ propsData: data }).$mount();
  return vm.$el.textContent;
}

describe("PropsTest", () => {
  it("renders correctly with different props", () => {
    expect(
      getRenderedText(PropsTest, {
        msg: "test"
      })
    ).toEqual("test");
  });
});
