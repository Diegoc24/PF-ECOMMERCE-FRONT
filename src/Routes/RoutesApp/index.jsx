import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "../../Components";
import TableOrders from "../../Components/Table/TableOrders";
import { Aside, Main } from "../../ComponentsStyles";
import AdminOrders from "../../Pages/AdminOrders/AdminOrders";
import Cart from "../../Pages/Cart/Cart";
import Detail from "../../Pages/Detail/Detail";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NewProduct from "../../Pages/NewProduct/NewProduct";
import Orders from "../../Pages/Orders/Orders";
import Profile from "../../Pages/Profile/Profile";
import Signup from "../../Pages/Signup/Signup";
import Store from "../../Pages/Store/Store";
import RutaAdmin from "../RutasProtegidas/RutaAdmin";
import RutaUser from "../RutasProtegidas/RutaUser";
import Favorites from "../../Pages/Favorites/Favorites";

function RoutesMain() {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Aside>
          <Navbar />
        </Aside>
      )}

      <Main>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="store" element={<Store />}>
              <Route path="detail/:id/*" element={<Detail />} />
            </Route>
            <Route path="favorites" element={<Favorites/>}>
              <Route path="detail/:id/*" element={<Detail />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<RutaUser />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/logout" element={<Home />} /> */}
          </Route>

          <Route element={<RutaAdmin />}>
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="/orders-admin" element={<AdminOrders />} />
          </Route>
        </Routes>
        <Toaster />
      </Main>
    </div>
  );
}

export default RoutesMain;
