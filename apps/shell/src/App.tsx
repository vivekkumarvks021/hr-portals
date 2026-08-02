import { Suspense, lazy } from "react";

const EmployeeApp = lazy(() => import("employee/App"));

function App() {
  return (
    <div>
      <h1>Shell Application</h1>

      <Suspense fallback={<h2>Loading Employee...</h2>}>
        <EmployeeApp />
      </Suspense>
    </div>
  );
}

export default App;
