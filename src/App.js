import "./styles.css";

import * as React from "react";
import { modeling } from "@jscad/modeling";
import dxf from "@jscad/dxf-deserializer";
import fs from "fs";
import { cube } from "@jscad/modeling/src/primitives";
import { Renderer } from "jscad-react";
const raw = fs.readFileSync(`${__dirname}/example009.dxf`, "UTF8");
const jscadCode = dxf.deserialize(
  {
    output: "jscad",
  },
  raw
);
console.log("jscadCode: " + jscadCode);
const App = () => {
  const [solids] = React.useState(jscadCode);
  return <Renderer solids={solids} height={600} width={600} />;
};

export default App;
