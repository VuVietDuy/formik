"use client";
import { useFormik } from "formik";

interface IValues {
  email: string;
  password: string;
}

const validate = (values: IValues) => {
  const errors: IValues = {
    email: "",
    password: "",
  };
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 8) {
    errors.password = "Must be less than 8 characters";
  }
};

export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-center">
      <div className="card">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="form-item">
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="input"
            ></input>
          </div>
          <div className="space-y-4">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              // id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="input"
            ></input>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
