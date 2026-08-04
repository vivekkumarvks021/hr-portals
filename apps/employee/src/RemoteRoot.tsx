import { Provider } from "react-redux";
import { store } from "./store/store";
import EmployeeRoutes from "./routes";

type Props = {
  isStandalone?: boolean;
};

export default function RemoteRoot(props: Props) {
  return (
    <Provider store={store}>
      <EmployeeRoutes {...props} />
    </Provider>
  );
}
