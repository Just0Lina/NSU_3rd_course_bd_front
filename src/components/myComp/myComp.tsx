function MyComp(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">Create an account</div>
        <div className="div-3">
          <div className="div-4">Full name</div>
          <div className="div-5">First and last name</div>
          <div className="div-6">Email address</div>
          <div className="div-7">Email</div>
          <div className="div-8">Password</div>
          <div className="div-9">Password</div>
          <div className="div-10">
            By signing up, you agree to our Terms of Use and Privacy Policy
          </div>
          <div className="div-11">
            <div className="div-12">Sign up</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          border-radius: 15px;
          background-color: #f3ede8;
          display: flex;
          max-width: 512px;
          flex-direction: column;
          color: #889581;
          padding: 37px 0;
        }
        .div-2 {
          text-align: center;
          font-feature-settings: "dlig" on;
          letter-spacing: -0.6px;
          align-self: center;
          white-space: nowrap;
          font: 700 24px Newsreader, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-2 {
            white-space: initial;
          }
        }
        .div-3 {
          display: flex;
          margin-top: 20px;
          width: 100%;
          flex-direction: column;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          padding: 0 16px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
          }
        }
        .div-4 {
          font-feature-settings: "dlig" on;
          font-family: Newsreader, sans-serif;
          font-weight: 500;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .div-5 {
          font-feature-settings: "dlig" on;
          font-family: Newsreader, sans-serif;
          justify-content: center;
          align-items: start;
          border-radius: 12px;
          background-color: #fbfbfb;
          margin-top: 8px;
          white-space: nowrap;
          padding: 16px 60px 16px 16px;
        }
        @media (max-width: 991px) {
          .div-5 {
            white-space: initial;
            max-width: 100%;
            padding-right: 20px;
          }
        }
        .div-6 {
          font-feature-settings: "dlig" on;
          font-family: Newsreader, sans-serif;
          font-weight: 500;
          margin-top: 24px;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
          }
        }
        .div-7 {
          font-feature-settings: "dlig" on;
          font-family: Newsreader, sans-serif;
          justify-content: center;
          align-items: start;
          border-radius: 12px;
          background-color: #fbfbfb;
          margin-top: 8px;
          white-space: nowrap;
          padding: 16px 60px 16px 16px;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            padding-right: 20px;
            white-space: initial;
          }
        }
        .div-8 {
          font-feature-settings: "dlig" on;
          font-family: Newsreader, sans-serif;
          font-weight: 500;
          margin-top: 24px;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
          }
        }
        .div-9 {
          font-feature-settings: "dlig" on;
          font-family: Newsreader, sans-serif;
          justify-content: center;
          align-items: start;
          border-radius: 12px;
          background-color: #fbfbfb;
          margin-top: 8px;
          white-space: nowrap;
          padding: 16px 60px 16px 16px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            padding-right: 20px;
            white-space: initial;
          }
        }
        .div-10 {
          color: #86947f;
          font-feature-settings: "dlig" on;
          margin-top: 16px;
          font: 14px Newsreader, sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
          }
        }
        .div-11 {
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          background-color: #889581;
          display: flex;
          margin-top: 24px;
          font-size: 14px;
          color: #f7f4f1;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: 0.21px;
          padding: 10px 60px;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-12 {
          font-feature-settings: "dlig" on;
          font-family: Newsreader, sans-serif;
          background-color: #889581;
          aspect-ratio: 2.38;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .div-12 {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}

export default MyComp

