import Cookies from "universal-cookie";
import env from "../env";
import ReactDOM from "react-dom/client";
import ShowError from "../components/Modals/ShowError";

const PostReq = async (props) => {
  const cookies = new Cookies();
  const token = cookies.get(env.cookieName);
  const error = ReactDOM.createRoot(document.getElementById("error"));
  const method = props.method?.toUpperCase() || "GET";
  const body = props.body;
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": token?.token,
    userid: token?.userId,
    ...props.headers, // Allow custom headers to be passed
  };

  const options = {
    method,
    headers,
    ...(method !== "GET" && method !== "HEAD"
      ? { body: JSON.stringify(body) }
      : {}),
  };

  try {
    const response = await fetch(env.siteApi + props.url, options);
    const result = await response.json();

    if (!response.ok) {
      const errorMessage =
        result.error || response.statusText || "An error occurred";
      error.render(<ShowError text={errorMessage} color="red" />);
      setTimeout(() => error.render(), 3000);
      throw new Error(errorMessage);
    }

    if (result.message) {
      error.render(
        <ShowError text={result.message} color={result.color || "green"} />
      );
      setTimeout(() => error.render(), 3000);
    }

    return result;
  } catch (err) {
    const errorMessage = err.message || "An unexpected error occurred";
    error.render(<ShowError text={errorMessage} color="red" />);
    setTimeout(() => error.render(), 3000);
    throw err;
  }
};

export default PostReq;

// const SearchCustomer = async () => {
//     if (!search || search.length < 3) return;
//     const result = await PostReq({
//       method: "Post",
//       url: "/panel/faktor/find-products",
//       body: { search: search },
//     });
//     setData("");
//     setTimeout(() => setData(result), 200);
//   };
//   useEffect(() => {
//     SearchCustomer();
//   }, [search]);
