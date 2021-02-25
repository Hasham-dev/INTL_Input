import React, { useEffect, useRef } from "react";

export const PhoneInput = () => {
  const phone = useRef();

  useEffect(() => {
    window.intlTelInput(phone.current, {
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    console.log(phone.current);
  }, []);
  return (
    <div>
      <input id="phone" ref={phone} type="tel" name="phone" />
      <input type="submit" className="btn" value="Verify" />
    </div>
  );
};
