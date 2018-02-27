import Vue from "vue";
import Click from "@/components/Click";

describe("ClickTest", () => {
  const Constructor = Vue.extend(Click);
  const vm = new Constructor().$mount();
  // 獲取按鈕
  const btn = vm.$el.querySelector("button");
  // 建立click事件
  const clickEvent = new window.Event("click");

  it("should render 1", () => {
    // 觸發事件
    btn.dispatchEvent(clickEvent);
    // 手動更新監聽
    vm._watcher.run();
    expect(vm.$el.querySelector("p").textContent).toContain("1");
  });
});
