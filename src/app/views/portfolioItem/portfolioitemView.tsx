import React from "react";
import { marked } from "marked";

export class Contact extends React.Component<{}, {}> {
  componentDidMount() {
    //   const markdown = require("../../../content/site" + name);
  }

  render() {
    return (
      <div className="flex-1 relative flex flex-col pt-[230px]">
        <div className="custom flex flex-col max-w-[750px] mt-[75px] ml-auto mr-auto w-full">
          <h2>Portfolio Item</h2>
        </div>
      </div>
    );
  }
}
