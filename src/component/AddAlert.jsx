import { useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../../src/App.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useFormik } from "formik";
import * as yup from 'yup'

function AddAlert() {
  const [startDate, setStartDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validationSchema: yup.object().shape({
      firstName: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required("Please enter your name"),
      description:yup.string()
      .min(2, 'Too Short!')
      .max(100, 'Too Long!')
      .required("Please enter your  description"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
      <form  onSubmit={formik.handleSubmit}>
        <div className="flex justify-center">
          <div className="sm:w-full xs:px-2  md:w-3/6">
            <div className="py-7 flex flex-col">
              <span className=" py-0 font-semibold text-xl">Add Alert</span>
              <span className=" text-sm">Add details of the alert</span>
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
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-white  border border-gray-300 text-slate-400	 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter alert Name"
                      {...formik.getFieldProps("firstName")}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-rose-600	">{formik.errors.firstName}</div>
            ) : null}
                  </div>
                </div>
              </div>
              <div className=" px-2">
                <div className="flex border-b-2 justify-between items-center">
                  <span
                    scope="col"
                    className="px-6 py-3 text-slate-600	 font-normal text-sm"
                  >
                    Status
                  </span>
                  <div
                    scope="col"
                    className="px-6 py-3 w-3/5 text-neutral-600 text-base	 font-normal"
                  >
                    <select
                      id="countries"
                      className="bg-white	 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Triggered</option>
                      <option value="US">Active</option>
                      <option value="CA">Active</option>
                      <option value="FR">Active</option>
                      <option value="DE">Active</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" px-2">
                <div className="flex border-b-2 justify-between items-center">
                  <span
                    scope="col"
                    className="px-6 py-3 text-slate-600	 font-normal text-sm"
                  >
                    Triggered Time
                  </span>
                  <div
                    scope="col"
                    className="flex xs:flex-col sm:flex-row md:justify-between px-6 py-3 w-3/5 text-neutral-600 text-base	 font-normal"
                  >
                    <div className="border w-36 rounded xs:mb-2 p-2 flex items-center">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                      <AiOutlineCalendar />
                    </div>
                    <div className="border w-36 rounded p-2 flex items-center">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                      />
                      <AiOutlineClockCircle />
                    </div>
                  </div>
                </div>
                <div className=" px-2">
                  <div className="flex border-b-2 justify-between items-center">
                    <span
                      scope="col"
                      className="px-6 py-3 text-slate-600	 font-normal text-sm"
                    >
                      Description
                    </span>
                    <div
                      scope="col"
                      className="px-6 py-3 w-3/5 text-neutral-600 text-base	 font-normal"
                    >
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-white h-20	 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Description"
                        {...formik.getFieldProps("description")}

                      />
                               {formik.touched.description && formik.errors.description ? (
              <div className="text-rose-600	">{formik.errors.description}</div>
            ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-2">
                <div className="flex border-b-2 justify-between items-center">
                  <span
                    scope="col"
                    className="px-6 py-3 text-slate-600	 font-normal text-sm"
                  >
                    Reported To
                  </span>
                  <div
                    scope="col"
                    className="px-6 py-3 w-3/5 text-neutral-600 text-base	 font-normal"
                  >
                    <select
                      id="countries"
                      className="bg-white	 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Placeholder</option>
                      <option value="US">Active</option>
                      <option value="CA">Active</option>
                      <option value="FR">Active</option>
                      <option value="DE">Active</option>
                    </select>
                  </div>
                </div>
                <div className="m-5">
                  <button className="bg-gray-300 text-sm	font-medium		 hover:bg-gray-200 text-black  py-2 px-4 rounded">
                    Cancel
                  </button>
                  <button  type="submit" className="bg-blue-500 text-sm	font-medium	 hover:bg-blue-700 text-white  py-2 px-4 m-2  rounded">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddAlert;
