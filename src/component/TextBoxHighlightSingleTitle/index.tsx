import HighlightWithinTextarea from "react-highlight-within-textarea";
import './style.css';
import { useState } from "react";
import { Regexes } from "../../utils/tools";
import Draft from "draft-js";

function TextBoxHighlightSingleTitle(props: any) {

  const [value, setValue] = useState("Write link or number or any thing");
  const onChange = (value: any) => setValue(value);

  const keyBindingFn = (e: any) => {
    if (!e.metaKey && e.code === 'Enter') {
      // Function to execute...
      return false
    }
    // Return Draft's default command for this key.
    return Draft.getDefaultKeyBinding(e)
  }

  return (
    <>
      <div className='contianer_main'>
        <div className='editor_single'>
          <HighlightWithinTextarea
            value={value}
            highlight={[Regexes.phone2, Regexes.link1, Regexes.link2]}
            onChange={onChange}
            keyBindingFn={keyBindingFn}
          />
        </div>
      </div>
    </>
  );
}
export default TextBoxHighlightSingleTitle;