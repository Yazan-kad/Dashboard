import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route
                index
                element={
                  <List title="Users Table" add="Add New User" linkTo="users" />
                }
              ></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              ></Route>
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <List
                    title="Products Table"
                    add="Add New Product"
                    linkTo="products"
                  />
                }
              ></Route>
              <Route path=":productId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
