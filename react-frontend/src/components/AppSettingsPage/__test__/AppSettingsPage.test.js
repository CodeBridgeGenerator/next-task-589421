import React from "react";
import { render, screen } from "@testing-library/react";

import AppSettingsPage from "../AppSettingsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders appSettings page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AppSettingsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("appSettings-datatable")).toBeInTheDocument();
    expect(screen.getByRole("appSettings-add-button")).toBeInTheDocument();
});
