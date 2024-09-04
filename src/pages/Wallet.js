import { Link } from "react-router-dom";
import "../App.css";
import { useFormik } from "formik";
import Landing from "./Landing";
import { SwisstronikPlugin } from '@swisstronik/web3-plugin-swisstronik';
import { MetamaskPlugin } from 'web3-metamask-plugin';
import {Web3} from 'web3';

function Wallet() {
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      bio: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // submit logic here
      const web3 = new Web3(window.ethereum);
      web3.registerPlugin(new SwisstronikPlugin());
      web3.registerPlugin(new MetamaskPlugin());

      async function connectToSwisstronik() {
        console.log("calling fn")
          await web3.metamask.connectWallet();
          await web3.metamask.switchToSwisstronik();
      }
    connectToSwisstronik()
    },
  });

  return (
    <>
      <Landing />
      <div className="app flex items-center justify-center absolute top-0 bottom-0 right-0 left-0 min-h-screen backdrop-blur-[1px]">
      <div className="bg-[#101828] text-[#EAECF0] rounded-xl overflow-hidden w-full max-w-[400px]">
        <div className="p-6 text-center border-b border-[#344054]">
          {" "}
          Create your profile
        </div>
        <div className="p-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-1 text-lg">
                Username
              </label>
              <div className="grid grid-cols-[1fr_auto] gap-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="johnnyyy"
                  className="w-full bg-[#1D2939] border border-[#344054] px-5 py-2 rounded-lg"
                  {...formik.getFieldProps("username")}
                />
                <div className="text-center bg-[#1D2939] border border-[#344054] px-5 py-2 rounded-lg">
                  @Swst.vercel
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-1 text-lg">
                Full name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="w-full bg-[#1D2939] border border-[#344054] px-5 py-2 rounded-lg"
                {...formik.getFieldProps("name")}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="bio" className="block mb-1 text-lg">
                Bio
              </label>
              <textarea
                type="text"
                name="bio"
                id="bio"
                placeholder="Say something about yourself..."
                className="w-full bg-[#1D2939] border border-[#344054] px-5 py-2 rounded-lg resize-none"
                rows={6}
                {...formik.getFieldProps("bio")}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#475467] text-[#EAECF0] py-3 px-4 rounded-lg"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 text-center text-xs text-[#98A2B3] bg-[#1D2939]">
          <p>
            By connecting your wallet, you agree to our{" "}
            <Link to={'/'} className="text-[#667085]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to={'/'} className="text-[#667085]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Wallet;