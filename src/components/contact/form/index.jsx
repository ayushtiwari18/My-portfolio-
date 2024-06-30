import React from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        send("service_izkmpte", "template_1baffab", data, "DHK9gT-lekfbjON4l")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                formSuccess();
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const formSuccess = () => {
        toast("Thanks for submitting your Query!");
        document.getElementById("queryForm").reset();
    };

    return (
        <div className="query-form">
            <ToastContainer />
            <form
                id="queryForm"
                onSubmit={handleSubmit(onSubmit)}
                className="query-form__form"
            >
                <div className="input-field">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        aria-label="Name"
                        {...register("from_name", {
                            required: "Name is required",
                        })}
                    />
                    {errors.from_name?.message && (
                        <p
                            className="errors"
                            role="alert"
                        >
                            {errors.from_name?.message}
                        </p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="reply_to"
                        placeholder="Email"
                        aria-label="Email"
                        {...register("reply_to", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.reply_to?.message && (
                        <p
                            className="errors"
                            role="alert"
                        >
                            {errors.reply_to?.message}
                        </p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone"
                        aria-label="Phone"
                        {...register("phone_number", {
                            required: "Phone number is required",
                            minLength: {
                                value: 8,
                                message: "Phone number is not valid",
                            },
                        })}
                    />
                    {errors.phone_number?.message && (
                        <p
                            className="errors"
                            role="alert"
                        >
                            {errors.phone_number?.message}
                        </p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        aria-label="Subject"
                        {...register("subject", {
                            required: "Subject is required",
                            minLength: {
                                value: 10,
                                message: "Minimum 10 characters required",
                            },
                        })}
                    />
                    {errors.subject?.message && (
                        <p
                            className="errors"
                            role="alert"
                        >
                            {errors.subject?.message}
                        </p>
                    )}
                </div>

                <div className="input-field full-width">
                    <textarea
                        className="textarea"
                        name="message"
                        placeholder="Your message"
                        aria-label="Your message"
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 20,
                                message: "Minimum 20 characters required",
                            },
                            maxLength: {
                                value: 500,
                                message: "Maximum 500 characters allowed",
                            },
                        })}
                    />
                    {errors.message?.message && (
                        <p
                            className="errors"
                            role="alert"
                        >
                            {errors.message?.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="query-form__submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
