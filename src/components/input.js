import React, { useEffect, useRef, useState } from "react";

export const PhoneInput = () => {
  const phone = useRef();
  const [inputText, setInputText] = useState();
  const [phoneNumberVar, setPhoneNumber] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneNumber = inputText.getNumber();

    console.log(phoneNumber);
    setPhoneNumber(phoneNumber);
  };

  const renderHandling = () => {
    const phoneInput = window.intlTelInput(phone.current, {
      preferredCountries: ["us", "co", "in", "pk"],

      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    setInputText(phoneInput);
    console.log(phone.current);
  };

  useEffect(() => {
    renderHandling();
  }, []);
  return (
    <div>
      <input id="phone" ref={phone} type="tel" name="phone" />
      <input
        type="submit"
        className="btn"
        onClick={handleSubmit}
        value="Verify"
      />

      <div className="alert alert-info">{`Phone number in E.164 format: ${phoneNumberVar}`}</div>
    </div>
  );
};
