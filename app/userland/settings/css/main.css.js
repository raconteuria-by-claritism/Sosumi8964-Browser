import {css} from '../../app-stdlib/vendor/lit-element/lit-element.js'
import commonCSS from '../../app-stdlib/css/common.css.js'
import buttonsCSS from '../../app-stdlib/css/buttons2.css.js'
import emptyCSS from './empty.css.js'

const cssStr = css`
${commonCSS}
${buttonsCSS}
${emptyCSS}

:host {
  display: grid;
  grid-template-columns: 190px 1fr;
  grid-gap: 20px;
  margin: 0px 10px;
}

.subnav {
  background: #f5f5fa;
  border-radius: 8px;
  padding: 10px 0;
  height: 99vh;
  overflow-y: auto;
  font-size: 12px;
  user-select: none;
}

.subview {

}

.subnav .item {
  padding: 8px 15px;
  margin-bottom: 2px;
  color: #34495e;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
}

.subnav .item .fa-fw {
  margin-right: 5px;
}

.subnav .item:hover {
  background: #f0f0f5;
}

.subnav .item.current {
  background: #dde;
  font-weight: 600;
}

.subnav hr {
  border: 0;
  border-top: 1px solid #dde;
  margin: 15px 0;
}
`
export default cssStr