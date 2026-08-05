import { Provider } from "react-redux";
import { store } from "./store/store";
import LeaveRoutes from "./routes";

type Props = {
  isStandalone?: boolean;
};

export default function RemoteRoot({ isStandalone = true }: Props) {
  return (
    <Provider store={store}>
      <LeaveRoutes isStandalone={isStandalone} />
    </Provider>
  );
}
