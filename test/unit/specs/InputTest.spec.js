import Vue from "vue";
import InputTest from "@/components/InputTest";

describe("InputTest", () => {
  const Constructor = Vue.extend(InputTest);
  const vm = new Constructor().$mount();
  // 獲取按鈕
  const btn = vm.$el.querySelector("button");
  // 建立click事件
  const clickEvent = new window.Event("click");

  it("the msg should be equal with input", () => {
    vm.input = "任何輸入資料";
    // 觸發事件
    btn.dispatchEvent(clickEvent);
    // 手動更新監聽
    vm._watcher.run();
    expect(vm.$el.querySelector("p").textContent).toContain("任何輸入資料");
  });
});
