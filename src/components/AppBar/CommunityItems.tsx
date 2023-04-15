"use client";

import React from "react";

export default function CommunityItems() {
  const communities = [
    {
      name: "dick",
    },
  ];

  return communities ? (
    communities.map((c, i) => {
      return <></>;
    })
  ) : (
    <></>
  );
}
