import AppRoutes from "./routes";

function App() {
  return <AppRoutes />;
}

export default App;

// import { lazy, Suspense } from "react";

// const EmployeeApp = lazy(() => import("employee/App"));

// function App() {
//   return (
//     <Suspense fallback={<h1>Loading...</h1>}>
//       <EmployeeApp />
//     </Suspense>
//   );
// }

// export default App;
