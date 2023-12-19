import axios from "axios";
import { useRouter } from "next/navigation";

const useLogIn = (api: any, email: string, password: string) => {
  const router = useRouter();
  const fetchUser = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://nalt-server-test.onrender.com/api/auth/signin",
        data: {
          email: email,
          password: password,
        },
      });
      router.replace("/");
      const userJson = JSON.stringify(response.data);
      localStorage.setItem("user", userJson);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.response.data.data);
      api.info({
        message: "ERROR",
        description: (
          <>
            {error.response.data.map((err: {}, index: number) => (
              <p key={index}>{Object.values(err)}</p>
            ))}
          </>
        ),
        placement: "top",
      });
    }
  };

  return { fetchUser };
};

export default useLogIn;
