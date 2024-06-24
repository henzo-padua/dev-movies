import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { Series } from "../pages/Series";
import { DefaoutLayout } from "../layout/DefaultLayout";
import { Detail } from "../pages/Detail";

export function Router() {
    return (
        <Routes>
            <Route element={<DefaoutLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/filmes" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/detalhe/:id" element={<Detail />} />
            </Route>
        </Routes>
    )
}