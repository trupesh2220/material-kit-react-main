import { Provider } from "react-redux";
import { AuthGuard } from "src/guards/auth-guard";
import { store } from "src/store/store";

export const withAuthGuard = (Component) => (props) =>
  (
    <Provider store={store}>
      <AuthGuard>
        <Component {...props} />
      </AuthGuard>
    </Provider>
  );
