import { Input } from "../components/UserInput"
import { Label, } from "../components/UserInput"

export default function UserLoginForm() {
    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-5">login form</h1>
            <form className="mt-15 ">
                <div className="border p-5  w-1/2 mx-auto rounded-2xl">
                    <Label
                        htmlFor="name"
                        text="Your Name"

                    />
                    <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                    />


                    <Label
                        htmlFor="email"
                        text="Your Email"

                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />


                    <Label
                        htmlFor="password"
                        text="Your Password"

                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <Label
                        htmlFor="file"
                        text="avatar"

                    />
                    <Input
                        id="file"
                        type="file"
                    />

                    <button className="border py-1 px-2 rounded cursor-pointer">Submit</button>
                </div>
            </form>
        </>
    )
}