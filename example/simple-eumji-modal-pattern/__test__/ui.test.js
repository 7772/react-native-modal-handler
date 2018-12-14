import Main from "../src/Main";
import renderer from "react-test-renderer";

test("UI TEST", () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
})