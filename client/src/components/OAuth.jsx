import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import axios from "axios";

function OAuth() {
  const dispatch = useDispatch();
  const handleGoogleAuth = async () => {
    try {
      dispatch(signInStart());
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const { displayName: name, email, photoURL: avatar } = user;
      const response = await axios.post(
        "/api/auth/google-auth",
        {
          name,
          email,
          avatar,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(signInSuccess(response.data.user));
      toast.success(response?.data?.message || "Signed in with Google");
    } catch (error) {
      dispatch(signInFailure(error?.response?.data?.message || error.message));
      toast.error(
        error?.response?.data?.message || "Error in Google authentication"
      );
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleAuth}
      className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium text-sm transition-colors duration-200 flex items-center justify-center cursor-pointer"
    >
      CONTINUE WITH GOOGLE
    </button>
  );
}

export default OAuth;
