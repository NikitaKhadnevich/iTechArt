const userData = (state) => state.signAPI.userData;
const isSignUp = (state) => state.signAPI.isSignUp;
const isSignIn = (state) => state.signAPI.isSignIn;
const isSignUpError = (state) => state.signAPI.isSignUpError;
const isSignInError = (state) => state.signAPI.isSignInError;

export { userData, isSignUp, isSignIn, isSignUpError, isSignInError };
