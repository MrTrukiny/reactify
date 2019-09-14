// Testing rendering
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import GenresList from "../../src/components/GenresList";
import "../../src/setupTest";

const mockStore = configureMockStore();
const store = mockStore({});

describe("GenresList", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Provider store={store}>
        <GenresList />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});