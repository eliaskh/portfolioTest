import React from "react"
import styled from "styled-components"

function Thank() {
  return (
    <>
      <Cover>
        <div className="cover">
          <div className="wrapperThank">
            <h1>THANK YOU FOR YOUR TIME, WE WILL GET BACK TO YOU SOON</h1>
          </div>
        </div>
      </Cover>
    </>
  )
}
const Cover = styled.div`
  .wrapperThank {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: 100vh;
    justify-items: center;
    align-items: center;
    align-content: center;
  }
  .wrapperThank h1 {
    font-size: 2rem;
  }
`
export default Thank
