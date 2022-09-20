import * as React from "react";

import "./Explanation.css";

const Explanation = () => {
  return (
    <div className="explanation-container">
      <h2>Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.</h2>
      <blockquote>
        Based on order of precedence, <code>'b' + 'a' + + 'a' + 'a'</code> is evaluated as follows:
        <ul className="explanation-list">
          <li>
            <code><s>'b' + 'a'</s> + + 'a' + 'a' </code> &rarr;  <code>'ba' + + 'a' + 'a'</code>
          </li>
          <li>
            <code>'ba' + + 'a' + 'a'</code> &rarr;  <code>'ba' + (+ 'a') + 'a'</code>
          </li>
          <li>
            The <code>+</code> in  <code>(+ 'a')</code> is a &nbsp;
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unary plus operator</a> that attempts to convert <code>'a'</code> into a number, therefore evaluates to <code>NaN</code>.
          </li>
          <li>
            <code>'ba' + <s>(+ 'a')</s> + 'a'</code> &rarr; <code>'ba' + 'NaN' + 'a'</code>
          </li>
          <li>
            <code><s>'ba' + 'NaN' + 'a'</s></code> &rarr; <code>'baNaNa'</code>
          </li>
          <li>
            <code>('baNaNa').toLowerCase()</code> &rarr; <code>'banana'</code>
          </li>
        </ul>
      </blockquote>
    </div>
  );
};

export default Explanation;