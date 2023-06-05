import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";

function ViweAlert() {
  return (
    <div className="bg-slate-100 h-screen	">
      <div>
        <div className="bg-white h-14  border-b-2 border-gray-200">
          <p className="p-4 underline decoration-sky-600 mx-20 font-semibold text-lg flex items-center text-sky-500	">
            <AiOutlineArrowLeft className="mx-3" />
            Back
          </p>
        </div>
      </div>
      <form>
        <div className="flex justify-center">
          <div className="w-3/6">
            <div className="py-7 flex flex-row justify-between">
              <div className="py-7 flex flex-col ">
                <span className=" py-0 font-semibold text-xl">
                  View Alert - Alert Name
                </span>
                <span className=" text-sm">View details of the alert</span>
              </div>
              <div className="py-7 flex flex-row ">
                <div className="border  w-36 flex flex-row p-1 h-8 rounded bg-blue-500 text-white font-semibold	text-sm">
                  <HiStatusOnline className="m-1" />
                  <span>Update Status</span>
                </div>
                <div className="border  mx-6 w-28 h-8 flex flex-row p-1 rounded bg-slate-200 text-slate-600	 font-semibold text-sm">
                  <MdOutlineModeEdit className="m-1" />
                  <span>Edit Alert</span>
                </div>
              </div>
            </div>
            <div className="border rounded bg-white ">
              <div className="border-b-2 p-3">
                <span className="font-semibold ml-4  text-sm	">
                  Alert Details
                </span>
              </div>
              <div className=" px-2">
                <div className="flex border-b-2 justify-between items-center">
                  <span
                    scope="col"
                    className="px-6 py-3 text-slate-600	 font-normal text-sm	"
                  >
                    Alert Name
                  </span>
                  <div
                    scope="col"
                    className="px-6 py-3 w-3/5 text-slate-600	 font-normal text-sm"
                  >
                    <span>Same Alert Name</span>
                  </div>
                </div>
              </div>
              <div className=" px-2">
                <div className="flex border-b-2 justify-between items-center">
                  <span
                    scope="col"
                    className="px-6 py-3 text-slate-600	 font-normal text-sm"
                  >
                    Current Status{" "}
                  </span>
                  <div
                    scope="col"
                    className="px-6 py-3 w-3/5 text-slate-600	 font-normal text-sm"
                  >
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 border bg-green-600 rounded">
                      Resolved
                    </button>
                  </div>
                </div>
              </div>
              <div className=" px-2">
                <div className="flex border-b-2 justify-between items-center">
                  <span
                    scope="col"
                    className="px-6 py-3 text-slate-600	 font-normal text-sm"
                  >
                    Reported By{" "}
                  </span>
                  <div
                    scope="col"
                    className="flex justify-between px-6 py-3 w-3/5 text-slate-600	 font-normal text-sm"
                  >
                    <span>Sundar Sharma</span>
                  </div>
                </div>
              </div>

              <div className="flex border-b-2 justify-between items-center">
                <span
                  scope="col"
                  className="px-6 py-3 text-slate-600	 font-normal text-sm"
                >
                  Reported To
                </span>
                <div
                  scope="col"
                  className="px-6 py-3 w-3/5 text-slate-600	 font-normal text-sm"
                >
                  <span>Gangaram Mathur</span>
                </div>
              </div>
            </div>
            <div className="border rounded bg-white mt-5">
              <div className="border-b-2 p-3">
                <span className="font-semibold ml-4  text-sm	">
                  Timeline & Updates
                </span>
              </div>
              <div className=" px-2">
                <div className="flex border-b-2 justify-between items-center">
                  <div scope="col" className="px-6 py-3 w-full">
                    <div className="col-span-full">
                      <div className="mt-2">
                        <div className="w-full h-20	flex justify-between items-center p-8 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6">
                          <div>
                            <input
                              type="text"
                              id="simple-search"
                              className="bg-white  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   dark:text-white "
                              placeholder="Write your comment here"
                              required
                            />
                          </div>
                          <div>
                            <button className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-1 px-3 border bg-gray-300 rounded">
                              Post
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ViweAlert;
