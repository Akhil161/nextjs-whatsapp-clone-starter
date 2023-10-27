import dynamic from "next/dynamic";
import React from "react";
const Container = dynamic(()=>import("./Container"),{ssr:false})
function VoiceCall() {
  return <div>VoiceCall</div>;
}

export default VoiceCall;
