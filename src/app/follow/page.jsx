export default function Follow() {
  return (
    <main className=" mx-5 sm:max-w-md pl-10 lg:max-w-lg  flex flex-col justify-center mt-20 sm:mt-28 sm:mx-auto">
      <header className=" mx-5 sm:max-w-md lg:max-w-lg flex justify-center sm:mx-auto">
        {/* <LogoText /> */}
        <div className=" flex flex-col gap-5 ">
          <div className=" flex flex-col gap-3 ">
            <p className=" lowercase font-medium text-2xl">Follow us</p>
            <p className=" text-xl opacity-45 font-medium">
              stay updated with our latest works & thoughts.{" "}
            </p>
          </div>

          <div className=" flex gap-3">
            <button className="sm:px-5 px-3 py-2 bg-black text-white text-sm rounded-full">
              book a call
            </button>
            <button className="sm:px-5 px-3 py-2 bg-white text-sm rounded-full">
              email
            </button>
            <button className="sm:px-5 px-3 py-2 bg-white text-sm rounded-full">
              follow
            </button>
          </div>
        </div>
      </header>{" "}

      <div className="  mt-20 flex flex-col gap-4">
        <div className=" flex gap-5 align-middle hover:bg-white cursor-pointer duration-300 min-w-96 max-w-96 px-8 py-3 rounded-full group ">
          <div className=" text-xl mt-2 group-hover:text-blue-500 duration-300">
            <ion-icon name="logo-twitter"></ion-icon>
          </div>

          <div>
            <p className=" text-base">Twitter</p>
            <p className=" opacity-50">Follow our journey & thoughts</p>
          </div>
        </div>
        <div className=" flex gap-5 align-middle hover:bg-white cursor-pointer duration-300 min-w-96 max-w-96 px-8 py-3 rounded-full group ">
          <div className=" text-xl mt-2 group-hover:text-gray-600 duration-300">
            <ion-icon name="logo-github"></ion-icon>
          </div>

          <div>
            <p className=" text-base">GitHub</p>
            <p className=" opacity-50">Check out our open source network</p>
          </div>
        </div>
        <div className=" flex gap-5 align-middle hover:bg-white cursor-pointer duration-300 min-w-96 max-w-96 px-8 py-3 rounded-full group ">
          <div className=" text-xl mt-2 group-hover:text-blue-500 duration-300">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>

          <div>
            <p className=" text-base">Linkedin</p>
            <p className=" opacity-50">Connect with our team</p>
          </div>
        </div>
        <div className=" flex gap-5 align-middle hover:bg-white cursor-pointer duration-300 min-w-96 max-w-96 px-8 py-3 rounded-full group ">
          <div className=" text-xl mt-2 group-hover:text-red-500 duration-300">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div>
            <p className=" text-base">Instagram</p>
            <p className=" opacity-50">See behind the scenes</p>
          </div>
        </div>
      </div>
    </main>
  );
}
