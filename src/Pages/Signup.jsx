const Signup = () => {
  return (
    <main className="min-h-screen bg-zinc-900 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://imgs.search.brave.com/Sw19kr564yXH4RxwtEjJSGd1_WSV_Usj0AeFEnQL6RY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/MjE2LzY0MS9zbWFs/bC9lZGl0YWJsZS1z/ZWFtbGVzcy1wYXR0/ZXJuLW9mLWZhc2hp/b24taXRlbXMtaWxs/dXN0cmF0aW9uLWlu/LW91dGxpbmUtc3R5/bGUtdG8tY3JlYXRl/LWJhY2tncm91bmQt/Zm9yLWNsb3RoaW5n/LXByb2plY3QtdmVj/dG9yLmpwZw"
            alt="signup"
            className="w-full h-72 md:h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-center text-zinc-200">
              Join thousands of amazing products.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-10">
          <h2 className="text-3xl font-bold text-zinc-800 mb-2">
            Create Account
          </h2>

          <p className="text-zinc-500 mb-8">Start your journey today 🚀</p>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium text-zinc-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-zinc-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-zinc-700">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-zinc-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-zinc-700">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Create Account
            </button>

            <p className="text-center text-zinc-500">
              Already have an account?{" "}
              <span className="text-indigo-600 cursor-pointer font-semibold">
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
