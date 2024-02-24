"use client";
import { Formik } from "formik";
import * as Yup from 'yup';

export default function SignupForm() {
 const initialValues = { email: '', password: '' }

  const handleSubmit = (data: any): void => {
    console.log('data', data)
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
  });

  return (
    <div className="flex justify-center">
      <div className="card">
      <Formik
       initialValues={initialValues}
       validationSchema={SignupSchema}
       onSubmit={handleSubmit}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             name="email"
             className="input"
             onChange={handleChange}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             name="password"
             className="input"
             onChange={handleChange}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button className="btn" type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
      </div>
    </div>
  );
}
