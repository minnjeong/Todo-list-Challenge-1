import React from "react";
import styled from "styled-components";

function Header () {
    return (
        <div>
            <StHeader>
                <div> 🐶 &nbsp;Todo List&nbsp; 🐶</div>
                <div>minjeong</div>
            </StHeader>
        </div>
    )
}

export default Header;

const StHeader = styled.div`
    align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 20px;
  color: white;
  background: rgb(37, 20, 11);
`