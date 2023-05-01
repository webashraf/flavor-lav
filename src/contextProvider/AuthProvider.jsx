import React, { createContext, useState } from 'react';


const ContextProvider = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        user,
    }


    return (
        <ContextProvider.Provider  value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;