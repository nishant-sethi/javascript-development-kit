import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("first test", () => {
  it("should pass", () => {
    expect(2 + 2).to.equal(4);
  });
});
describe("index.html", () => {
  it("should have h1 that says users", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Users");
    dom.window.close();
  });
});
