import "antd/dist/reset.css";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { Headers } from "./components/Header";
import { Footer } from "./components/Footer";
import { Layout, message } from "antd";

import { PageContainer, ProLayout } from "@ant-design/pro-components";
import { Button, Switch } from "antd";
import { useEffect, useRef, useState } from "react";
import customMenuDate from "./customMenu";
import { icons } from "antd/es/image/PreviewGroup";
import { CheckMarkSVG } from "./SVG/CheckMark.SVG";
import { MtccSVG } from "./SVG/MtccSVG";
import Contents from "./content";
import { CarFilled, CiCircleFilled } from "@ant-design/icons";
import { OperatorWindow } from "./components/FTD/Operator/OperatorWindow";
import React from "react";
import jwtDecode from "jwt-decode";
import Login from "./Pages/Login/Login";
import qs from "qs";
import { ApolloProvider, useLazyQuery } from "@apollo/client";
import { apolloClient } from "./API/Client";
import { ME_QUERY } from "./MeQuery";
import UserContext from "./Context/UserContext";

// const waitTime = (time: number = 100) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// };

let serviceData: any[] = customMenuDate;

export default function App() {
  const [appLoading, setAppLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [loggedOut, setLoggedOut] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  // const onClick = (e: any) => {
  //   if (e.key != undefined) {
  //     navigate(e.key);
  //   }
  //   console.log("click loged from parent", e.key);
  // };

  // {
  //   const token = localStorage.getItem("toms_token");
  //   if (token) {
  //     const prevRoute = localStorage.getItem("prevRoute");
  //     if (prevRoute) {
  //       localStorage.removeItem("prevRoute");
  //       window.location.pathname = prevRoute;
  //     }
  //   }
  // }

  // const [me] = useLazyQuery(ME_QUERY, {
  //   client: apolloClient,
  //   onCompleted: (data) => {
  //     setUser({
  //       ...data.me,
  //     });
  //     setAppLoading(false);
  //     setLoggedOut(false);
  //   },
  //   onError: (error) => {
  //     localStorage.removeItem("toms_token");
  //     localStorage.setItem("logOutClicked", "true");
  //     setLoggedOut(true);
  //     setAppLoading(false);
  //     if (error.message === "Unauthorized") {
  //       message.error("Not authorized to access this app.");
  //     } else {
  //       message.error("An error occurred while logging in.");
  //     }
  //   },
  //   fetchPolicy: "network-only",
  //   nextFetchPolicy: "cache-first",
  // });

  // const redirect = () => {
  //   localStorage.setItem("logOutClicked", "false");
  //   window.location.href = `https://id.mtcc.com.mv/?returnUrl=${process.env.REACT_APP_RETURN_URL}&type=employee&appId=${process.env.REACT_APP_APP_ID}`;
  // };

  // const logoutRedirect = () => {
  //   setPrevRoute();
  //   window.location.href = `https://id.mtcc.com.mv/logout/?returnUrl=${process.env.REACT_APP_RETURN_URL}&type=employee&appId=${process.env.REACT_APP_APP_ID}`;
  // };

  // const setPrevRoute = () => {
  //   const currentPath = window.location.pathname;
  //   const token = localStorage.getItem("toms_token");
  //   if (currentPath !== "/" && !token)
  //     localStorage.setItem("prevRoute", currentPath);
  // };

  // interface SSOToken {
  //   id: number;
  //   type: string;
  //   iat: number;
  //   exp: number;
  // }

  // useEffect(() => {
  //   const setLogOutStates = () => {
  //     setPrevRoute();
  //     setLoggedOut(true);
  //     setAppLoading(false);
  //   };
  //   if (user === null) {
  //     const token = localStorage.getItem("toms_token");
  //     if (token) {
  //       const decoded = jwtDecode<SSOToken>(token);
  //       if (decoded.id) {
  //         me();
  //       } else {
  //         setLogOutStates();
  //       }
  //     } else {
  //       if (window.location) {
  //         const tkn = qs.parse(window.location.search, {
  //           ignoreQueryPrefix: true,
  //         }).token as string;
  //         if (tkn) {
  //           localStorage.setItem("toms_token", `${tkn}`);
  //           const decoded = jwtDecode<SSOToken>(tkn);
  //           if (decoded.id) {
  //             me();
  //           } else {
  //             setLogOutStates();
  //           }
  //         } else {
  //           setLogOutStates();
  //         }
  //       } else {
  //         setLogOutStates();
  //       }
  //     }
  //   } else {
  //     setAppLoading(false);
  //   }
  // }, [user, me]);

  // const logout = () => {
  //   localStorage.removeItem("toms_token");
  //   localStorage.setItem("logOutClicked", "true");
  //   logoutRedirect();
  // };

  // if (appLoading) {
  //   return (
  //     <div style={{ padding: "40px" }}>
  //       <h3>Loading...</h3>
  //     </div>
  //   );
  // }

  // if (!appLoading && loggedOut) {
  //   if (localStorage.getItem("logOutClicked") === "true") {
  //     return <Login login={redirect} />;
  //   }
  //   redirect();
  // }

  // const [appLoading, setAppLoading] = useState(true);
  // const [user, setUser] = useState(null);
  // const [loggedOut, setLoggedOut] = useState(false);
  // const [toggle, setToggle] = useState(false);
  // const [menuData, setMenuData] = useState([]);

  // const redirect = () => {
  //   const returnUrl = process.env.REACT_APP_RETURN_URL;
  //   const appId = process.env.REACT_APP_APP_ID;
  //   const type = "employee";
  //   const loginUrl = `https://id.mtcc.com.mv/?returnUrl=${returnUrl}&type=${type}&appId=${appId}`;

  //   window.location.href = loginUrl;
  // };

  // const logoutRedirect = () => {
  //   const returnUrl = process.env.REACT_APP_RETURN_URL;
  //   const appId = process.env.REACT_APP_APP_ID;
  //   const type = "employee";
  //   const logoutUrl = `https://id.mtcc.com.mv/logout/?returnUrl=${returnUrl}&type=${type}&appId=${appId}`;

  //   window.location.href = logoutUrl;
  // };

  // const setPrevRoute = () => {
  //   const currentPath = window.location.pathname;
  //   const token = localStorage.getItem("toms_token");
  //   if (currentPath !== "/" && !token)
  //     localStorage.setItem("prevRoute", currentPath);
  // };

  // const [me] = useLazyQuery(ME_QUERY, {
  //   client: apolloClient,
  //   onCompleted: (data) => {
  //     // const roles: string[] = data.me.roles;

  //     setUser({
  //       ...data,
  //     });
  //     setAppLoading(false);
  //     setLoggedOut(false);
  //   },
  //   onError: (error) => {
  //     localStorage.removeItem("toms_token");
  //     setLoggedOut(true);
  //     setAppLoading(false);

  //     if (error.message === "Unauthorized") {
  //       message.error("Not authorized to access this app.");
  //     } else {
  //       message.error("An error occurred while logging in.");
  //     }
  //   },
  // });

  // interface SSOToken {
  //   id: number;
  //   type: string;
  //   iat: number;
  //   exp: number;
  // }

  // useEffect(() => {
  //   const setLogOutStates = () => {};
  //   if (user === null) {
  //     const token = localStorage.getItem("toms_token");
  //     console.log(token);
  //     if (token) {
  //       const decoded = jwtDecode<SSOToken>(token);
  //       if (decoded.id) {
  //         me();
  //       } else {
  //         setLogOutStates();
  //       }
  //     } else {
  //       if (window.location) {
  //         const tkn = qs.parse(window.location.search, {
  //           ignoreQueryPrefix: true,
  //         }).token as string;
  //         if (tkn) {
  //           localStorage.setItem("toms_token", `${tkn}`);
  //           const decoded = jwtDecode<SSOToken>(tkn);
  //           if (decoded.id) {
  //             me();
  //           } else {
  //             setLogOutStates();
  //           }
  //         } else {
  //           setLogOutStates();
  //         }
  //       }
  //     }
  //   }
  // }, [user, me]);

  // const logout = () => {
  //   localStorage.removeItem("toms_token");
  //   localStorage.setItem("logOutClicked", "true");
  //   logoutRedirect();
  // };

  // if (appLoading) {
  //   return (
  //     <div style={{ padding: "40px" }}>
  //       <h3>Loading...</h3>
  //     </div>
  //   );
  // }

  // if (!appLoading && loggedOut) {
  //   if (localStorage.getItem("logOutClicked") === "true") {
  //     return <Login login={redirect} />;
  //   }
  //   redirect();
  // }

  // const actionRef = useRef<{
  //   reload: () => void;
  // }>();

  return (
    <ProLayout
      style={{
        height: "100vh",
        display: "flex",
      }}
      menuDataRender={() => [
        {
          path: "/operator",
          name: "Fit to Drive",
          icon: <CarFilled />,
          component: "../components/FTD/Operator/OperatorWindow",
          hideChildrenInMenu: false,
          children: [
            {
              path: "/operator",
              name: "Operator",
              icon: <CarFilled />,
              component: "../components/FTD/Operator/OperatorWindow",
            },
            {
              path: "/inchargeftd",

              name: "Submit Ftd",
              icon: <CarFilled />,
              component: "../components/FTD/Incharge-Ftdform-mobile",
            },
            {
              path: "/approval",
              name: "FTD Approval Page",
              icon: <CarFilled />,
              component: "../components/FTD/Incharge-Ftdform-mobile",
            },
            {
              path: "/ftdreport",
              name: "FTD Report",
              icon: <CarFilled />,
              component: "../components/FTD/Report/TestGenericReport",
            },
            {
              path: "/addincharge",
              name: "Manage Shift Incharge",
              icon: <CarFilled />,
              component: "../componets/FTD/Report/AddIncharge",
            },
          ],
        },
      ]}
      // actionRef={actionRef}
      suppressSiderWhenMenuEmpty={toggle}
      title="Fit to Drive"
      logo={<MtccSVG />}
      menu={{
        request: async () => {
          // await waitTime(2000);
          return serviceData;
        },
      }}
      menuItemRender={(item, dom) => {
        return (
          <a
            onClick={() => {
              if (item.path) {
                window.location.href = item.path;
              }
            }}
          >
            {dom}
          </a>
        );
      }}
      location={{
        pathname: "/o",
      }}
      rightContentRender={() => <div></div>}
    >
      <Contents />
    </ProLayout>
  );
}
