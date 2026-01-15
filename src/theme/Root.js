import React from 'react';
import OriginalRoot from '@theme-original/Root';
import Chatbot from '@site/src/components/Chatbot';

export default function Root(props) {
  return (
    <>
      <OriginalRoot {...props} />
      <Chatbot />
    </>
  );
}
