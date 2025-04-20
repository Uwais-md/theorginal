export default function Home() {
    const openSourceFriends = [
      {
        name: "Argos",
        description: "Argos provides the developer tools to debug tests and detect visual regressions.",
        url: "#"
      },
      {
        name: "BoxyHQ",
        description: "BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.",
        url: "#"
      },
      {
        name: "Cal.com",
        description: "Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.",
        url: "#"
      },
    ];
  
    return (
      <div className="min-h-screen bg-white text-black px-6 md:px-20 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Our Open Source Friends
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-600 mb-10">
          We believe in a better and more sustainable future powered by Open Source software. <br />
          Below you can find a list of our friends who are just as passionate about open source and the future as we are.
        </p>
  
        <div className="grid md:grid-cols-3 gap-6">
          {openSourceFriends.map((friend, idx) => (
            <a
              href={friend.url}
              key={idx}
              className="border border-gray-200 hover:shadow-md rounded-md p-5 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{friend.name}</h3>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3h7m0 0v7m0-7L10 14"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-600">{friend.description}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
  