import { Button } from "flowbite-react";

export default function CallToAction() {
    return (
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className=" flex-1 justify-center flex flex-col">
                <h2 className=" text-2xl">
                    Do you want to check my other web-sites ?
                </h2>
                <p className=" text-gray-500 my-2">
                    Check out theese resources
                </p>
                <Button gradientDuoTone="purpleToPink">
                    <a
                        href="https://mern-estate-0uyd.onrender.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MERN Estate project
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img
                    src="https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?fit=560%2C315&ssl=1"
                    alt=" MERN picture"
                />
            </div>
        </div>
    );
}
