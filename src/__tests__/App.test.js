import React from "react"
import { Provider } from "react-redux"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import App from "../App"
import store from "../redux/store/index"

describe("Test App", () => {
  function renderApp(store, props = {}) {
    return render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }

  test("show loading indicator till API responds", async () => {
    renderApp(store)
    expect(screen.getByRole("progressbar").classList[0]).toBe("MuiCircularProgress-root")
  })
})
