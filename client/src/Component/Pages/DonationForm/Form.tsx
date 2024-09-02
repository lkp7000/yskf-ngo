import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import api from "../../BaseService/BaseService";
// import * as Yup from "yup";

interface DonationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  donationAmount: number | string;
  customAmount: number;
  recurring: boolean;
  coverFee: boolean;
  cardInfo: string;
}

const initialValues: DonationFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  donationAmount: "",
  customAmount: 0,
  recurring: false,
  coverFee: false,
  cardInfo: "",
};

// const validationSchema = Yup.object({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   donationAmount: Yup.mixed().required(
//     "Please select or enter a donation amount"
//   ),
//   customAmount: Yup.number().min(0, "Please enter a valid amount"),
//   cardInfo: Yup.string().required("Card information is required"),
// });

const DonationForm: React.FC = () => {
  useEffect(() => {
    initiatePayment();
    const res = api
      .get("/donar/get-donar-list")
      .then((res) => console.log(res));
  }, []);

  const handleSubmit = (values: DonationFormValues) => {
    console.log("Form values", values);
    // Add your form submission logic here
  };

  const initiatePayment = async () => {
    try {
      const response: any = await api.post("/payment", {
        amount: "100", // Example amount
        firstname: "John", // Example first name
        email: "john@example.com", // Example email
        phone: "1234567890", // Example phone number
        productinfo: "Product XYZ", // Example product info
      });

      if (!response?.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response?.json();

      // Redirecting to PayU payment page
      window.location.href = data.action;
    } catch (error) {
      // setPaymentError("Error initiating payment");
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="max-w-lg mx-auto bg-white p-6 rounded-lg">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">
                First Name<span className="text-red-500">*</span>
              </label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="mt-1 p-2 w-full border rounded-lg"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email Address<span className="text-red-500">*</span>
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="mt-1 p-2 w-full border rounded-lg"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">
                Choose Donation Amount<span className="text-red-500">*</span>
              </label>
              <div
                role="group"
                aria-labelledby="donationAmount"
                className="mt-2"
              >
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="donationAmount"
                    value="10"
                    className="mr-2"
                  />
                  ₹10
                </label>
                <label className="inline-flex items-center ml-4">
                  <Field
                    type="radio"
                    name="donationAmount"
                    value="50"
                    className="mr-2"
                  />
                  ₹50
                </label>
                <label className="inline-flex items-center ml-4">
                  <Field
                    type="radio"
                    name="donationAmount"
                    value="100"
                    className="mr-2"
                  />
                  ₹100
                </label>
                <label className="inline-flex items-center ml-4">
                  <Field
                    type="radio"
                    name="donationAmount"
                    value={values.customAmount}
                    className="mr-2"
                  />
                  <Field
                    type="number"
                    name="customAmount"
                    placeholder="Other Donation Amount"
                    className="p-2 border rounded-lg w-28"
                    onChange={(e: any) => {
                      setFieldValue("customAmount", Number(e.target.value));
                      setFieldValue("donationAmount", Number(e.target.value));
                    }}
                  />
                </label>
              </div>
              <ErrorMessage
                name="donationAmount"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cardInfo" className="block text-gray-700">
                Card Information<span className="text-red-500">*</span>
              </label>
              <Field
                id="cardInfo"
                name="cardInfo"
                placeholder="Card Information"
                className="mt-1 p-2 w-full border rounded-lg"
              />
              <ErrorMessage
                name="cardInfo"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white p-2 rounded-lg w-full hover:bg-green-700"
              style={{
                background: "linear-gradient(to bottom, #e30323, #e50378)",
              }}
            >
              Donate
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DonationForm;
