import React, { useState } from 'react';
import { connect } from "react-redux";
import { firebaseApp } from './firebaseConfig';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { PhoneVerifyUpdate } from "@/redux/actions/userAction";
import { useRouter } from "next/router";

const Mobile_verify = ({ PhoneVerifyUpdate }) => {
    // Inputs
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
  
    const auth = getAuth();
    const router = useRouter();
    // Sent OTP
    const signin = () => {
        let phoneNumber = mynumber;
        if(!phoneNumber.includes('+88'))
        {
            phoneNumber = "+88" + mynumber;
        }

        if (phoneNumber === "" || phoneNumber.length < 14)
        {
            alert("Please enter a valid phone number");
            return;
        }
        let verify = new RecaptchaVerifier('recaptcha-container', {
            'size': 'normal',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
            'expired-callback': () => {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            }
          }, auth);

        signInWithPhoneNumber(auth, phoneNumber, verify)
        .then((confirmationResult) => {
            setfinal(confirmationResult);
            console.log(confirmationResult);
            alert("code sent")
            setshow(true);
        })
        .catch((err) => {
            alert(err);
            window.location.reload()
        });
    }
  
    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
            let data = { 'phone': mynumber };
            let status = PhoneVerifyUpdate(data, router);
            if (status)
            {
                alert("Mobile Verified");
                // re-route to profile
            }
        }).catch((err) => {
            alert("Wrong code");
        })
    }
  
    return (
        <div style={{ "marginTop": "200px" }}>
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                    <input value={mynumber} onChange={(e) => { setnumber(e.target.value) }} placeholder="phone number" />
                    <br /><br />
                    <div id="recaptcha-container"></div>
                    <button onClick={signin}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />

                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
        </div>
    );
}
  
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
  };
  
  export default connect(mapStateToProps, {
    PhoneVerifyUpdate,
  })(Mobile_verify);