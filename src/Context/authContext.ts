import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
    user: null,
};

if (localStorage.getItem("toms_token")) {
    const decodedToken: any = jwtDecode(localStorage.getItem("toms_token")!);

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("toms_token");
    } else {
        initialState.user = decodedToken;
    }
}

export const AuthContext = createContext({
    user: null,
    login: (userData: any) => {},
    logout: () => {},
});

function authReducer(state: any, action: any) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}


function AuthProvider(props: any) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    function login(userData: any) {
        localStorage.setItem("toms_token", userData.token);
        dispatch({
            type: "LOGIN",
            payload: userData,
        });
    }

    function logout() {
        localStorage.removeItem("toms_token");
        dispatch({ type: "LOGOUT" });
    }


}