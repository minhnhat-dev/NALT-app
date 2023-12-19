import axios from "axios";
import { useRouter } from "next/navigation";

const useSignUp = (api: any, username: string, email: string, password: string) => {
  const router = useRouter();
  const fetchData = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://nalt-server-test.onrender.com/api/auth/signup",
        data: {
          name: username,
          email: email,
          password: password,
        },
      });
      router.replace("/login");
      console.log(response.data);
    } catch (error:any) {
      api.info({
        message: "ERROR",
        description:  error.response?.data.map((err:any) => Object.values(err)).join(""),
        placement: "top",
      });
    }
  };

  return { fetchData };
};

export default useSignUp;
