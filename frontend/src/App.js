import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, useNavigate, redirect } from "react-router-dom";
import StackOverflow from "./components/StackoOverflow";
import Question from "./components/Add-Question/Question";
import ViewQuestion from "./components/ViewQuestion";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { Component, useEffect } from "react";
import { auth } from "./firebase";



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // login implementation
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);


  // const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       user ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/auth",
  //             state: {
  //               from: props.location,
  //             },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );



  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/auth"} element={<Auth />} />
          <Route path="/add-question" element={<Question />} />     
          <Route path="/question" element={<ViewQuestion />} />        
          <Route path="/" element={<StackOverflow />} />                   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
