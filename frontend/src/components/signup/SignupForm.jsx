const SignupForm = () => {
    return (
        <div className="px-10">
            <h1 className="text-4xl pb-5">InventEase</h1>
            <div className="container mx-auto px-10 bg-color-form rounded-3xl">
                <form className="space-y-3 p-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                <option>AU</option>
                                <option>IN</option>
                                <option>UK</option>
                                <option>USA</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Language</label>
                            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                <option>EN</option>
                                <option>HI</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-full shadow-sm hover:bg-blue-700">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm