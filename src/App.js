import "./styles.css";
import Table from "./Components/Table/Table";
import { qboSageOne, qboXero } from "../Contents";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table
        portid="portal"
        title="this is portal id"
        comparison={qboSageOne}
      />
      {/* <Table portid="xero" title="this is xero id" comparison={qboXero} /> */}
    </div>
  );
}
