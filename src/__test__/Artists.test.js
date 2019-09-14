// Testing redux actions and rendering
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ArtistsList from "../components/ArtistsList";
import "../setupTest";
import * as actions from '../../src/store/actions/artistActions'
import * as types from '../../src/store/actions/types'


const mockStore = configureMockStore();
const store = mockStore({});

describe('actions', () => {
  it('should set loading to false when ARTIST are loading', () => {
    const loading = true
    const expectedAction = {
      type: types.ARTISTS_LOADING
    }
    expect(actions.setArtistsLoading(loading)).toEqual(expectedAction)
  })
})

describe("ArtistsList", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Provider store={store}>
        <ArtistsList />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});