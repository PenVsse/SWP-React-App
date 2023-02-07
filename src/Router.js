import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/index.js";
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
