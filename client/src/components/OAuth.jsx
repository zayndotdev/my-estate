import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

function OAuth() {
  const handleGoogleAuth = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const { displayName: name, email, photoURL: avatar } = user;
      console.log(name, email, avatar);
      console.log(user);
      console.log("Google clicked");
    } catch (error) {
      toast.error(error?.message || "Error in google authentication");
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
