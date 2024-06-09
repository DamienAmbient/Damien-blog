export default function About() {
    return (
        <div className=" min-h-screen flex items-center justify-center">
            <div className=" max-w-2xl mx-auto p-3 text-center">
                <div>
                    <h1 className=" text-3xl font-semibold text-center my-7">
                        About Damien's blog
                    </h1>
                    <div className="text-md text-gray-500 flex flex-col gap-6">
                        <p>
                            Welcome to Damien's blog! This blog is a test
                            project created by Damien K.
                        </p>
                        <p>This website was built with MERN-stack</p>
                        <p>Big thanks to Sahand G.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
