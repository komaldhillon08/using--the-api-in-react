import { Input } from "../components/UserInput"
import { Label, } from "../components/UserInput"
import { addUser } from "../api/UserApi"
import React, { useState } from "react"

export default function UserLoginForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        avatar: null as File | null,
    })

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        if (name === "avatar" && files) {
            setFormData({ ...formData, avatar: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }


    // submit form 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await addUser(formData)

        if (response) {
            alert("Users Create successfully")
        } else {
            alert("User not Created ")
        }

    }
    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-5">login form</h1>
            <form className="mt-15 " onSubmit={handleSubmit}>
                <div className="border p-5  w-1/2 mx-auto rounded-2xl">
                    <Label
                        htmlFor="name"
                        text="Your Name"


                    />
                    <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChanges}
                    />


                    <Label
                        htmlFor="email"
                        text="Your Email"

                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChanges}


                    />


                    <Label
                        htmlFor="password"
                        text="Your Password"


                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChanges}


                    />
                    <Label
                        htmlFor="avatar"
                        text="Avatar"

                    />
                    <Input
                        id="avatar"
                        type="file"
                        name="avatar"
                        onChange={handleChanges}



                    />

                    <button type="submit" className="border py-1 px-2 rounded cursor-pointer">Submit</button>
                </div>
            </form>
        </>
    )
}