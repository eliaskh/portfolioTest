import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
function RightMenu() {
  return (
    <Cover>
      <div>
        <div className="containerMenu">
          <div className="menu1">
            <div className="itemmenu">
              <ul>
                <AnchorLink href="#web" offset="200">
                  <h1> בניית אתרים</h1>
                </AnchorLink>
              </ul>
            </div>
            <div className="itemmenu">
              <ul>
                <AnchorLink href="#ux" offset="50">
                  <h1> עיצוב חווית משתמש</h1>
                </AnchorLink>
              </ul>
            </div>
            <div className="itemmenu">
              <ul>
                <AnchorLink href="#shop" offset="50">
                  <h1> חנויות אונליין</h1>
                </AnchorLink>
              </ul>
            </div>

            <div className="itemmenu">
              <ul>
                <AnchorLink href="#design1" offset="50">
                  <h1> עיצוב גרפי</h1>
                </AnchorLink>
              </ul>
            </div>
            <div className="itemmenu">
              <ul>
                <AnchorLink href="#kedom" offset="50">
                  <h1>קידום ברשתות חברתיות</h1>
                </AnchorLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Cover>
  )
}
const Cover = styled.div`
  .containerMenu {
    z-index: 999;
    position: fixed;
    right: 0px;
    top: 60px;
    width: 100vw;
    height: 40px;
    background-image: var(--clr-Gradient);
    /* display: grid;
    grid-template-columns: 25% 1fr 25%; */
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--clr-font);
    border-radius: 5px;
  }
  .containerMenu1 {
    z-index: 9999999;
    position: fixed;
    right: 0px;
    bottom: 100px;
    width: 100vw;
    height: 80px;
    background-color: var(--clr-menu-full);
    display: grid;
    grid-template-columns: 25% 1fr 25%;
    justify-content: center;
    align-items: center;

    color: var(--clr-font);
    border-radius: 5px;
  }
  .containerMenu:hover {
    opacity: 1;
  }
  .logo1 {
    justify-self: center;
  }
  .darkandlight {
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .menu1 {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
    justify-items: center;
    gap: 40px;
  }
  .itemmenu {
    justify-self: center;
    cursor: pointer;
  }
  .activeMenu::after {
    content: "-";
    display: flex;
    justify-content: center;
  }
  .itemmenu li {
    color: var(--clr-font);

    /* font-weight: bold; */
  }
  .itemmenu h1 {
    /* color: var(--clr-font); */
    color: White;
    font-size: 12px;
    /* font-weight: bold; */
  }
  .backtotop {
    position: fixed;
    left: 10px;
    bottom: 10px;
  }
`
export default RightMenu
