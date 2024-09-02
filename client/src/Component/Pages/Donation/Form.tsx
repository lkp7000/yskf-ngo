import { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    amount: "",
    productInfo: "",
    firstname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    // const fetch = async () => {
    //   try {
    //     const response1 = await axios.get("http://localhost:3000/ngo/1");
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    //   // const res = await axios.post("http://localhost:3000/ngo/create-user", {
    //   //   userID: 1,
    //   //   amount: 100,
    //   //   username: "Neeraj",
    //   // });
    // };
    // fetch();
  }, []);
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/stripe/payment",
        formData
      );
      const paymentData = response.data;

      console.log({ paymentData });

      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://sandbox.payu.in/_payment"; // Use 'https://secure.payu.in/_payment' for live

      Object.keys(paymentData).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = paymentData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  return (
    <div>
      <h1>PayU Payment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product Info:</label>
          <input
            type="text"
            name="productInfo"
            value={formData.productInfo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Form;
