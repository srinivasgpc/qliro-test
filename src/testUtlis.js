import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { compose, applyMiddleware, createStore } from "redux"
import { mockData } from "./components/mockData"

import rootReducer from "./redux/reducers/index"
import thunk from "redux-thunk"
const TestProvider = ({ store, children }) => <Provider store={store}>{children}</Provider>

export function testRender(ui, { store, ...otherOpts }) {
  return render(<TestProvider store={store}>{ui}</TestProvider>, otherOpts)
}

export function makeTestStore() {
  const mockStore = createStore(rootReducer, {}, compose(applyMiddleware(thunk)))
  const origDispatch = mockStore.dispatch
  mockStore.dispatch = jest.fn(origDispatch)
  return mockStore
}

export const mockFixture = mockData
