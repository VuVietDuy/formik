"use client"
import { useFormik } from "formik"

export default function SignupForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <div className="flex justify-center">
            <div className="card">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div className="form-item">
                        <label htmlFor="email" className="label">Email Address</label>
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
                        <label htmlFor="password" className="label">Password</label>
                        <input
                            // id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className="input"
                        ></input>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </div>
    )
}