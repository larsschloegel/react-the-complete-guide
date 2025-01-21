import React from "react";

export default function Input({richText, placeholder, ...props}) {
    // return a <textarea> if a richText prop is true
    // return an <input> otherwise
    // forward / set the received props on the returned elements
    if (richText){
        return <textarea placeholder={placeholder} {...props}></textarea>;
    } else {
        return <input placeholder={placeholder} {...props}></input>
    }
  }