import React from 'react'

import Script from 'next/script'

const contact = () => {
  return (
    <div>
      This is contact page

      <Script>{`alert("Welcome to contact page")`}</Script>
    </div>
  )
}

export default contact

export const metadata = {
    title: "Contact Facebook App",
    description: "This is Contact page of facebook, we can connect with world using facebook",
  };