const crypto = require("crypto");

const payuConfig = {
  merchantKey: "YOUR_MERCHANT_KEY",
  merchantSalt: "YOUR_MERCHANT_SALT",
  payuBaseURL: "https://sandboxsecure.payu.in", // Use the production URL in production
};

// export const payment = async (req, res, next) => 

// app.post("/api/payment", (req, res) 
export const payment = async (req, res, next) => {
  const { amount, firstname, email, phone, productinfo } = req.body;

  const txnid = Math.random().toString(36).substr(2, 10);
  const hashString = `${payuConfig.merchantKey}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${payuConfig.merchantSalt}`;
  const hash = crypto.createHash("sha512").update(hashString).digest("hex");

  const payuData = {
    key: payuConfig.merchantKey,
    txnid: txnid,
    amount: amount,
    firstname: firstname,
    email: email,
    phone: phone,
    productinfo: productinfo,
    surl: "http://yourwebsite.com/api/payment-success",
    furl: "http://yourwebsite.com/api/payment-failure",
    hash: hash,
    service_provider: "payu_paisa",
  };

  res.send({
    action: `${payuConfig.payuBaseURL}/_payment`,
    params: payuData,
  });
});

app.post("/api/payment-success", (req, res) => {
  const response = req.body;
  const hashString = `${payuConfig.merchantSalt}|${response.status}|||||||||||${response.email}|${response.firstname}|${response.productinfo}|${response.amount}|${response.txnid}|${payuConfig.merchantKey}`;
  const hash = crypto.createHash("sha512").update(hashString).digest("hex");

  if (hash === response.hash) {
    // Hash matched, process the payment success
    res.json({ status: "success", data: response });
  } else {
    // Hash didn't match, possible tampering
    res.json({ status: "error", message: "Payment Hash Mismatch" });
  }
});

app.post("/api/payment-failure", (req, res) => {
  // Handle the payment failure logic
  res.json({ status: "failure", data: req.body });
});
