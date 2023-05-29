import React, { useEffect, useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import { HiOutlineX, HiOutlinePlus } from "react-icons/hi";
import axios from "axios";
import CircularJSON from "circular-json";
import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

var FinalCourse = {};

const initialValues = {
  name: "",
  // batchSize: "",
  category: "",
  duration: "",
  timings: "",
  difficulty: "",
  gender: "",
  ageGroup: "",
  liveClasses: "",
  priceI: "",
  priceC: "",
  details: "",
  startDate: "",

  faq: [
    {
      ques: "",
      ans: "",
    },
  ],

  dayDetails: [""],
};

function OneOnOne() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(null);
  const [propertyImage, setPropertyImage] = useState({});
  const [imageURL, setImageURL] = useState("");

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);

    setFormValues(values);

    submitProps.setSubmitting(false);
  };

  const imgConvert = (file) => {
    const reader = (file) =>
      new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        if (file) {
          fileReader.readAsDataURL(file);
        }
      });
    reader(file).then((result) =>
      setPropertyImage({ name: file?.name, url: result })
    );
    console.log(propertyImage.url);

    //   if(propertyImage.url) {
    //     setImageURL(propertyImage.url)
    // }
  };

  useEffect(() => {
    imgConvert();
  }, [propertyImage]);

  FinalCourse = formValues;

  const postCourse = () => {
    const options = {
      method: "POST",
      url: "https://shivayshaktibackend.onrender.com/course1",
      headers: {
        Accept: "application/json",
      },
      data: {
        name: formValues.name ? formValues.name : " ",
        // batchSize: formValues.batchSize,
        category: formValues.category ? formValues.category : " ",
        duration: formValues.duration ? formValues.duration :" ",
        timings: formValues.timings ? formValues.timings :" ",
        difficulty: formValues.difficulty ? formValues.difficulty :" ",
        gender: formValues.gender ? formValues.gender :" ",
        ageGroup: formValues.ageGroup ? formValues.ageGroup :" ",
        liveClasses: formValues.liveClasses ? formValues.liveClasses :" ",
        priceI: formValues.priceI ? formValues.priceI :" ",
        priceC: formValues.priceC ? formValues.priceC :" ",
        details: formValues.details ? formValues.details : " ",
        startDate: formValues.startDate ? formValues.startDate : " ",
        faq: formValues.faq ? formValues.faq : [{}],
        image: propertyImage.url ? propertyImage.url : " ",
        dayDetails: formValues.dayDetails ? formValues.dayDetails : [],
      },
    };

    axios.request(options).then(function (response) {
      toast.success("Course Added Successfully !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });


      setTimeout(() => {
        console.log("navigate ")
        navigate("/courses");
      }, 3500);


      console.log("Api Response", response.data);
    }).catch((error) => {
      toast.error("Please Try After Sometime !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("Api Error",error);
    });
  };









  return (
    <>
       <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        // console.log("Formik props", formik);
        return (
          <>
            <div className="bg-[url('https://cdn.discordapp.com/attachments/1031605156996972574/1089873814923509790/Screen_3.png')] w-full  bg-cover">
              <div className="mx-20">
                <div className="flex text-center items-center ">
                  <img
                    className="w-36 -ml-16"
                    src="https://cdn.discordapp.com/attachments/1031605156996972574/1089263441568616560/image_3.png"
                    alt=""
                  />
                  <div className="text-xl ml-8 font-semibold"> New Course </div>
                </div>
                <div className="mb-4 text-red-500">
                  {" "}
                  Note :- All Fields Are Mandatory
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center text-start ">
                    <label className="text-[#FAA200] w-32 font-medium">
                      Select Type :
                    </label>
                    <Link to="/courses/add-new-course/group-session" 
                      className="rounded-2xl text-black border-2 border-black py-1 px-2 hover:-translate-y-1 hover:scale-110  duration-300"
                      type="button"
                    >
                      Group Sessions
                    </Link>
                    <Link to="/courses/add-new-course/one-on-one"
                      className="  bg-black rounded-2xl text-white  border-2 py-2 px-2 ml-6 hover:-translate-y-1 hover:scale-110  duration-300"
                      type="button"
                    >
                      Personal Training Sessions
                    </Link>
                  </div>

                  <Form>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-4">
                        <div className="flex  items-center text-start">
                          <label
                            htmlFor="name"
                            className="text-[#FAA200] w-32 font-medium"
                          >
                            Course Name :
                          </label>
                          <Field
                            placeholder="Course Name*"
                            type="text"
                            className="h-10 w-80 border-2 border-gray-300 shadow-lg px-2 rounded-md inputShadow"
                            id="name"
                            name="name"
                          />
                        </div>

                        <div className="flex  items-center text-start">
                          <label className="text-[#FAA200] w-32 font-medium">
                            {" "}
                            Select Category :
                          </label>
                          <Field
                            className=" h-10  shadow-lg px-2 rounded-md w-48 border-[#cdcdcd] border-2 text-gray-400 inputShadow"
                            name="category"
                            as="select"
                          >
                            <option value="">Select*</option>
                            <option value="General Fitness">
                              General Fitness
                            </option>
                            <option value="Weight Management">
                              Weight Management
                            </option>
                            <option value="Mental Wellness">
                              Mental Wellness
                            </option>
                            <option value="Medical Conditions">
                              Medical Conditions
                            </option>
                            <option value="Flexibility">Flexibility</option>
                            <option value="Spirituality">Spirituality</option>
                          </Field>
                        </div>
                        <div className="flex  text-start items-center">
                          <label className="text-[#FAA200] w-32 font-medium">
                            {" "}
                            Start Date* :{" "}
                          </label>
                          <Field
                            className="h-10 text-gray-400 rounded-md w-48 inputShadow"
                            name="startDate"
                            placeholder="dd/mm/yyyy*"
                            type="date"
                          ></Field>
                        </div>
                        {/* <div className="flex  text-start items-center">
                          <label className="text-[#FAA200] w-32 font-medium">
                            {" "}
                            Batch Size :{" "}
                          </label>
                          <Field
                            className="h-10 rounded-md w-48  border-[#cdcdcd] border-2 inputShadow"
                            name="batchSize"
                            placeholder="Enter Number*"
                            type="number"
                          ></Field>
                        </div> */}
                        <div className="flex  text-start items-center">
                          <label className="text-[#FAA200] w-32 font-medium">
                            Duration :{" "}
                          </label>
                          <Field
                            className="h-10 text-gray-400 rounded-md border-[#cdcdcd] border-2 w-48 inputShadow"
                            name="duration"
                            as="select"
                          >
                            <option>Select*</option>
                            <option value={7}>1 Week</option>

                            <option value={15}>15 Days</option>
                            <option value={30}>30 Days</option>
                            <option value={60}>60 Days</option>
                            <option value={90}>90 Days</option>
                            <option value={180}>6 Months</option>
                            <option value={360}>Annual</option>
                          </Field>
                        </div>
                        <div className="flex  text-start items-center">
                          <label className="text-[#FAA200] w-32 font-medium">
                            {" "}
                            Timings :{" "}
                          </label>

                          <Field
                            className="h-10 rounded-md text-gray-400 border-[#cdcdcd] border-2 w-48 inputShadow"
                            name="timings"
                            placeholder="00:00 (hrs)*"
                            type="time"
                          ></Field>
                        </div>

                        <div className="flex  text-start items-center">
                          <label className="text-[#FAA200] w-32 font-medium">
                            Difficulty :{" "}
                          </label>

                          <Field
                            className="h-10 text-gray-400 rounded-md border-[#cdcdcd] border-2 w-48 inputShadow"
                            name="difficulty"
                            as="select"
                          >
                            <option value="">Select*</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Medium">Medium</option>
                            <option value="Advance">Advance</option>
                          </Field>
                        </div>
                        <div className="flex  text-start items-center">
                          <label className="text-[#FAA200] w-32 font-medium">
                            Gender :{" "}
                          </label>

                          <Field
                            className="h-10 text-gray-400 rounded-md border-[#cdcdcd] border-2 w-48 inputShadow"
                            name="gender"
                            as="select"
                          >
                            <option value="">Select*</option>
                            <option value="All">All</option>

                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </Field>
                        </div>
                        <div className="flex  text-start items-center">
                          <label className="text-[#FAA200] w-32 font-medium">
                            Age Group :{" "}
                          </label>

                          <Field
                            className="h-10 text-gray-400 rounded-md border-[#cdcdcd] border-2 w-48 inputShadow"
                            name="ageGroup"
                            as="select"
                          >
                            <option value="">Select*</option>
                            <option value="All">All</option>

                            <option value="12-18">12-18 Year</option>
                            <option value="18-25">18-25 Year</option>
                            <option value="25-40">25-40 Year</option>
                            <option value="40-60">40-60 Year</option>
                            <option value="60+">60+ Year</option>
                          </Field>
                        </div>
                        <div className="flex  text-start items-center">
                          <label className="text-[#FAA200] w-32 font-medium">
                            Live Classes :{" "}
                          </label>

                          <Field
                            className="h-10 rounded-md w-48 border-[#cdcdcd] border-2 inputShadow"
                            name="liveClasses"
                            placeholder="No. of Classes*"
                            type="name"
                          ></Field>
                        </div>

                        <div className="flex  text-start items-center">
                          <div className="flex flex-col">
                          <label className="text-[#FAA200] w-32 font-medium">
                            Price (pp) :{" "}
                          </label>
                          <label className="text-[#FAA200] w-32 font-extralight text-xs">
                          Individual
                          </label>
                          </div>
                          <Field
                            className="h-10 rounded-md w-48 border-[#cdcdcd] border-2 inputShadow"
                            name="priceI"
                            placeholder="Enter Price*"
                            type="number"
                          ></Field>
                        </div>
                        <div className="flex  text-start items-center">
                        <div className="flex flex-col">
                          <label className="text-[#FAA200] w-32 font-medium">
                            Price (pp) :{" "}
                          </label>
                          <label className="text-[#FAA200] w-32 font-extralight text-xs">
                          Couple Deal
                          </label>
                          </div>
                          <Field
                            className="h-10 rounded-md w-48 border-[#cdcdcd] border-2 inputShadow"
                            name="priceC"
                            placeholder="Enter Price*"
                            type="number"
                          ></Field>
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-col gap-4">
                          <div className="flex  text-start items-start">
                            <label className="text-[#FAA200] w-32 font-medium">
                              Details :{" "}
                            </label>
                            <Field
                              rows="10"
                              className="w-[550px] rounded-md py-2 px-4 border-[#cdcdcd] border-2 inputShadow"
                              name="details"
                              placeholder="Course details....*"
                              as="textarea"
                            ></Field>
                          </div>

                          
                          <div className="flex  text-start items-center">
                            <label
                              htmlFor="name"
                              className="text-[#FAA200] w-32 font-medium"
                            >
                              Image Upload :
                            </label>
                            <input
                              className="inputShadow"
                              accept="image"
                              id="file"
                              type="file"
                              onChange={(e) => {
                                // @ts-ignore
                                imgConvert(e.target.files[0]);
                              }}
                            />
                          </div>
                          <div className="flex  text-start items-center h-72 overflow-y-scroll">
                            <label
                              htmlFor="name"
                              className="text-[#FAA200] w-32 font-medium"
                            >
                              Day Details :
                            </label>

                            <FieldArray name="dayDetails">
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { dayDetails } = values;

                                return (
                                  <div>
                                    {dayDetails.map((dayDetails, index) => (
                                      <div key={index}>
                                        <label className="text-[#FAA200] w-32 font-medium mr-3">
                                          {" "}
                                          Day {index + 1} :
                                        </label>
                                        <Field
                                          className="mt-4 w-64 inputShadow"
                                          placeholder="Title / Description*"
                                          name={`dayDetails[${index}]`}
                                        />
                                        {index > 0 && (
                                          <button
                                            type="button"
                                            onClick={() => remove(index)}
                                          >
                                            <HiOutlineX className="text-red-500 w-6 h-6 "></HiOutlineX>
                                          </button>
                                        )}
                                      </div>
                                    ))}
                                    <div className="text-right mr-5">
                                      <button
                                        className="text-[#FAA200]  text-right  border-2 border-[#FAA200] py-1 px-3 rounded-md mt-3 hover:-translate-y-1 hover:scale-110  duration-300"
                                        type="button"
                                        onClick={() => push("")}
                                      >
                                        <div className="flex text-center items-center gap-2">
                                          <HiOutlinePlus className=" border-2 border-[#FAA200]"></HiOutlinePlus>
                                          <span>Add New</span>
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                                );
                              }}
                            </FieldArray>
                          </div>

                        </div>
                      </div>


                      
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold mt-5 mb-5">
                        Frequently Asked Questions
                      </h1>
                    </div>

                    <FieldArray
                      name="faq"
                      render={(arrayHelpers) => (
                        <div>
                          {formik.values.faq.map((faq, index) => (
                            <div key={index}>
                              <div className="flex  text-start items-center">
                                <label
                                  htmlFor="name"
                                  className="text-[#FAA200] w-32 font-medium"
                                >
                                  Question {index + 1} :
                                </label>
                                <Field
                                  className="mt-4 w-[1000px]"
                                  placeholder="Enter your question*"
                                  name={`faq[${index}].ques`}
                                />
                              </div>
                              <div className="flex  text-start items-center">
                                <label
                                  htmlFor="name"
                                  className="text-[#FAA200] w-32 font-medium"
                                >
                                  Answer {index + 1} :
                                </label>
                                <Field
                                  rows="3"
                                  className="w-[1000px] rounded-md py-2 px-4 mt-4 border-[#cdcdcd] border-2 inputShadow"
                                  as="textarea"
                                  placeholder="Enter your answer*"
                                  name={`faq.${index}.ans`}
                                />
                              </div>

                              <div className="items-end text-right mr-[230px] mt-2">
                                <button
                                  className="text-red-500 border-2 border-red-400 py-1 px-3 rounded-md hover:-translate-y-1 hover:scale-110  duration-300"
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  <div className="flex  items-center gap-2 ">
                                    <HiOutlineX className=" border-2 border-red-500"></HiOutlineX>
                                    <span>Remove</span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          ))}
                          <button
                            className="text-[#FAA200] border-2 border-[#FAA200] py-2 px-3 rounded-md ml-32 -mt-8 hover:-translate-y-1 hover:scale-110  duration-300"
                            type="button"
                            onClick={() =>
                              arrayHelpers.push({ ques: "", ans: "" })
                            }
                          >
                            <div className="flex text-center items-center gap-2">
                              <HiOutlinePlus className=" border-2 border-[#FAA200]"></HiOutlinePlus>
                              <span>Add New</span>
                            </div>
                          </button>
                        </div>
                      )}
                    />

                    {/* <button type="reset">Reset</button> */}
                    <div className="flex items-center text-center justify-center">
                      <button
                        className="text-white bg-[#283143]  text-lg mt-8 mb-4 py-2 px-10 rounded-md hover:-translate-y-1 hover:scale-110  duration-300"
                        onClick={postCourse}
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
    </>
  );
}

export default OneOnOne;
