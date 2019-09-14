// Testing rendering
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AlbumsList from "../../src/components/AlbumsList";
import "../../src/setupTest";

const mockStore = configureMockStore();
const store = mockStore({});

describe("AlbumsList", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Provider store={store}>
        <AlbumsList />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});