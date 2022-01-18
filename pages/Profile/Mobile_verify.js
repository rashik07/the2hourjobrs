import React, { useState } from "react";
import { connect } from "react-redux";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { PhoneVerifyUpdate } from "@/redux/actions/userAction";
import { useRouter } from "next/router";
import { Input, Button,message } from "antd";

const Mobile_verify = ({ PhoneVerifyUpdate }) => {
  // Inputs
  const [mynumber, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  var config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
  const firebaseApp = initializeApp(config);

  const auth = getAuth();
  const router = useRouter();
  // Sent OTP
  const signin = () => {
    let phoneNumber = mynumber;
    if (!phoneNumber.includes("+88")) {
      phoneNumber = "+88" + mynumber;
    }

    if (phoneNumber === "" || phoneNumber.length < 14) {
      message.error("Please enter a valid phone number");
      
      return;
    }
    let verify = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      auth
    );

    signInWithPhoneNumber(auth, phoneNumber, verify)
      .then((confirmationResult) => {
        setfinal(confirmationResult);
        // console.log(confirmationResult);
        message.success("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        let data = { phone: mynumber };
        let status = PhoneVerifyUpdate(data, router);
        console.log(result);
        if (status) {
          message.success("Mobile Verified");
          // re-route to profile
        }
        // else if (status== false) {
        //   message.error("Mobile Verified");
        //   // re-route to profile
        // }
      })
      .catch((err) => {
        message.error("Wrong code");
      });
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <center>
        <div style={{ display: !show ? "block" : "none" }}>
          <Input
            value={mynumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            placeholder="phone number"
            style={{ width: "250px" }}
          />
          <br />
          <br />
          <div id="recaptcha-container"></div>
          <Button onClick={signin}>Send OTP</Button>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <Input
            type="text"
            placeholder={"Enter your OTP"}
            onChange={(e) => {
              setotp(e.target.value);
            }}
            style={{ width: "250px" }}
          ></Input>
          <br />
          <br />

          <Button onClick={ValidateOtp}>Verify</Button>
        </div>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  PhoneVerifyUpdate,
})(Mobile_verify);
