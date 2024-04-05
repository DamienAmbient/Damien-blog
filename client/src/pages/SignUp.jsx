import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className=" min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                {/*left*/}
                <div className=" flex-1">
                    <Link to="/" className="font-bold dark:text-white text-4xl">
                        <span className=" px-2 py-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-white">
                            Damien's
                        </span>
                        Blog
                    </Link>
                    <p className=" text-sm mt-5">
                        This blog is created for testing purpose only
                    </p>
                </div>

                <div className=" flex-1">
                    <form className=" flex flex-col gap-4">
                        <div>
                            <Label value="Your username"></Label>
                            <TextInput
                                type="text"
                                placeholder="Username"
                                id="username"
                            ></TextInput>
                            <Label value="Your email"></Label>
                            <TextInput
                                type="text"
                                placeholder="name@somemail.com"
                                id="email"
                            ></TextInput>
                            <Label value="Your password"></Label>
                            <TextInput
                                type="text"
                                placeholder="Password"
                                id="password"
                            ></TextInput>
                        </div>
                        <Button gradientDuoTone="purpleToBlue" type="submit">
                            Sign Up
                        </Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account ?</span>
                        <Link to="/sign-in" className=" text-blue-500">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
