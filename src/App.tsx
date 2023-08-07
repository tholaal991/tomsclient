import { useLazyQuery, ApolloProvider } from "@apollo/client";
import jwtDecode from "jwt-decode";
import qs from "qs";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { apolloClient } from "./API/backupClient";
import UserContext from "./Context/UserContext";
import { ME_QUERY } from "./MeQuery";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import { Applications } from "./Pages/Applications/Applications";
import { Passed } from "./Pages/Passed/Passed";
import { Practical } from "./Pages/Practical/Practical";
import { Shortlist } from "./Pages/annoucement/Iulaan";
import AddIcharge from "./components/FTD/AddIncharge";
import { InchargeFtdFormMobile } from "./components/FTD/Incharge-Ftdform-mobile";
import { OperatorWindow } from "./components/FTD/Operator/OperatorWindow";
import TESTGENERIC from "./components/FTD/Report/TestGenericReport";
import AntdFTDForm from "./components/FTD/antd-form";
import { FtdMobile } from "./components/Ftdform-mobile";
import { PassedPage } from "./components/PassedPage";
import { Approval } from "./components/approvl";
import { DeviceDetect } from "./components/devicedetect";
import { Layout, message } from "antd";

const App = () => {
  {
    const navigate = useNavigate();
    {
      const token = localStorage.getItem("toms_token");
      if (token) {
        const prevRoute = localStorage.getItem("prevRoute");
        if (prevRoute) {
          localStorage.removeItem("prevRoute");
          window.location.pathname = prevRoute;
        }
      }
    }

    const [appLoading, setAppLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [loggedOut, setLoggedOut] = useState(false);

    const [me] = useLazyQuery(ME_QUERY, {
      client: apolloClient,
      onCompleted: (data) => {
        setUser({
          ...data.me,
        });
        setAppLoading(false);
        setLoggedOut(false);
        // alert('hello')
      },
      onError: (error) => {
        console.log(error);
        localStorage.setItem("logOutClicked", "true");
        localStorage.removeItem("toms_token");
        setLoggedOut(true);
        setAppLoading(false);
        // alert("An error occurred while logging in.");
      },
    });

    // const { loading, error, data } = useQuery(CUSTOMER, {
    //   client: client,
    //   onCompleted: (data) => {
    //     console.log('Customer query completed:', data);
    //   },
    //   onError: (error) => {
    //     console.error('Customer query error:', error);
    //   },
    // });

    // SSO Employee
    const redirect = () => {
      localStorage.setItem("logOutClicked", "false");
      window.location.href = `https://id.mtcc.com.mv/login/employee/ad?returnUrl=${process.env.REACT_APP_RETURN_URL}&type=employee&appId=${process.env.REACT_APP_APP_ID}`;
    };

    const logoutRedirect = () => {
      setPrevRoute();
      window.location.href = `https://id.mtcc.com.mv/logout/employee/ad?returnUrl=${process.env.REACT_APP_RETURN_URL}&type=employee&appId=${process.env.REACT_APP_APP_ID}`;
    };

    const setPrevRoute = () => {
      const currentPath = window.location.pathname;
      const token = localStorage.getItem("toms_token");
      if (currentPath !== "/" && !token)
        localStorage.setItem("prevRoute", currentPath);
    };

    interface SSOToken {
      id: number;
      type: string;
      iat: number;
      exp: number;
    }

    useEffect(() => {
      const setLogOutStates = () => {
        setPrevRoute();
        setLoggedOut(true);
        setAppLoading(false);
      };

      if (user === null) {
        const token = localStorage.getItem("toms_token");
        if (token) {
          const decoded = jwtDecode<SSOToken>(token);
          console.log(decoded);
          if (decoded.id) {
            me();
            // console.log(me())
          } else {
            setLogOutStates();
          }
        } else {
          if (window.location) {
            const tkn = qs.parse(window.location.search, {
              ignoreQueryPrefix: true,
            }).token as string;
            if (tkn) {
              localStorage.setItem("toms_token", `${tkn}`);
              const decoded = jwtDecode<SSOToken>(tkn);
              if (decoded.id) {
                me();
              } else {
                setLogOutStates();
              }
            } else {
              setLogOutStates();
            }
          } else {
            setLogOutStates();
          }
        }
      } else {
        setAppLoading(false);
      }
    }, [user, me]);

    const logout = () => {
      console.log("Logout fuction was called!");
      localStorage.setItem("logOutClicked", "true");
      localStorage.removeItem("toms_token");
      logoutRedirect();
    };

    if (appLoading) {
      return (
        <div style={{ padding: "40px" }}>
          <h3>Loading...</h3>
        </div>
      );
    }

    if (!appLoading && loggedOut) {
      if (localStorage.getItem("logOutClicked") === "true") {
        return <Login login={redirect} />;
      }
      redirect();
    }

    return (
      <UserContext.Provider value={{ user, setUser, logout }}>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Routes>
              <Route path="/test" element={<Dashboard />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/applications" element={<Applications />}></Route>

              <Route path="/passed" element={<Passed />}></Route>
              <Route path="/practical" element={<Practical />}></Route>
              <Route path="/shortlist" element={<Shortlist />}></Route>

              <Route path="/submitftd" element={<FtdMobile />}></Route>
              <Route path="/device" element={<DeviceDetect />}></Route>
              <Route path="/approval" element={<Approval />}></Route>
              <Route path="/pro" element={<AntdFTDForm />}></Route>

              <Route path="/ftdreport" element={<TESTGENERIC />}></Route>

              <Route path="/123" element={<PassedPage />}></Route>
              <Route path="/operator" element={<OperatorWindow />}></Route>
              <Route path="/testgeneric" element={<TESTGENERIC />}></Route>
              <Route
                path="/inchargeftd"
                element={<InchargeFtdFormMobile />}
              ></Route>
              <Route path="/addincharge" element={<AddIcharge />}></Route>
              {/* <Route path="/" element={<h2> hi how are you </h2>}></Route> */}
            </Routes>
          </Layout>
        </ApolloProvider>
      </UserContext.Provider>
    );
  }
};
export default App;
