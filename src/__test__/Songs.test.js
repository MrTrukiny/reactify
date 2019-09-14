// Testing redux actions, reducer and rendering
import React from "react";
import { shallow } from "enzyme";
import "../setupTest";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import SongsList from "../components/SongsList";
import * as actions from "../../src/store/actions/songActions";
import reducer from "../../src/store/reducers/songReducer";
import * as types from "../../src/store/actions/types";


const mockStore = configureMockStore();
const store = mockStore({});

describe("actions", () => {
  it("should set loading to false when ARTIST are loading", () => {
    const loading = true;
    const expectedAction = {
      type: types.SONGS_LOADING
    };
    expect(actions.setSongsLoading(loading)).toEqual(expectedAction);
  });
});

describe('song reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        songs: [],
        loading: false
      }
    )
  })
  it('should handle GET_SONGS', () => {
    expect(
      reducer([], {
        type: types.GET_SONGS,
        payload: [{id: 1, name: "We Will Rock You"}, {id: 2, name: "Drive"}]
      })
    ).toEqual(
      {
        songs: [{id: 1, name: "We Will Rock You"}, {id: 2, name: "Drive"}],
        loading: false
      }
    )
  })
})

describe("ArtistList", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Provider store={store}>
        <SongsList />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
