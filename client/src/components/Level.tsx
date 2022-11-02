import React, { useState } from "react";

export default function Level(props: {
  name: string;
  level: number;
}) {

  return (
    <div className="content has-text-left">
      <div className="block">
        hello {props.name} level {props.level}
      </div>
    </div>
  );
}