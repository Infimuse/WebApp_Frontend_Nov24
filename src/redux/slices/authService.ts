
export interface Login{
  email: string;
  password: string;
}

export interface SignUp{
  email: string;
  password: string;
  lastName: string;
  firstName: string;
}

const AuthService = {
    signUp: async (data: SignUp) => {
      try {
        const response = await fetch(`https://whatever.lat/api/v1/customers/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const json = await response.json();
        return json;
      } catch (error) {
        console.error('Error during sign up:', error);
      }
    },
    // Add other authentication methods (signIn, signOut, etc.) here as needed
      // Add login method
      login: async (data:Login) => {
          try {
            const response = await fetch(`https://whatever.lat/api/v1/customers/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            const json = await response.json();
            return json;
          } catch (error) {
            console.error('Error during login:', error);
            throw error;
          }
        },
  };
  
  export default AuthService;