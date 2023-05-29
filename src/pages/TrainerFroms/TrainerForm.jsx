import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { HiOutlineX, HiOutlinePlus } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

let FinalCourse = {};

const initialValues = {
  trainerName: "",
  whatsapp: "",
  email: "",
  location: "",
  experience: "",
  expertise: "",
  specializations: [""],

  pin: "",
  certifications: [""],
};

function TrainerForm() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(null);
  const [propertyImage, setPropertyImage] = useState({});

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
      url: "https://shivayshaktibackend.onrender.com/trainer",
      headers: {
        Accept: "application/json",
      },
      data: {
        avatar: propertyImage.url,

        name: formValues.trainerName,
        mobile: formValues.whatsapp,
        email: formValues.email,
        location: formValues.location,
        experience: formValues.experience,
        expertise: formValues.expertise,
        specializations: formValues.specializations,
        certifications: formValues.certifications,
        pin: formValues.pin,
      },
    };

    console.log(options.data.avatar);

    axios
      .request(options)
      .then(function (response) {
        toast.success("Trainer Added Successfully !", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setTimeout(() => {
          console.log("navigate ");
          navigate("/Trainers");
        }, 4000);

        console.log("Api Response", response.data);
      })
      .catch((error) => {
        toast.error("Please Try After Sometime !", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("Api Error", error);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        // console.log("Formik props", formik);
        return (
          <>
            <ToastContainer
              position="bottom-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <div className="bg-[url('https://cdn.discordapp.com/attachments/1031605156996972574/1089873814923509790/Screen_3.png')] w-full h-screen  bg-cover">
              <div className="mx-20">
                <div className="flex text-center items-center ">
                  <img
                    className="w-36 -ml-16"
                    src="https://cdn.discordapp.com/attachments/1031605156996972574/1089263441568616560/image_3.png"
                    alt=""
                  />
                  <div className="text-xl ml-8 font-semibold">
                    {" "}
                    Add New Trainer{" "}
                  </div>
                </div>
                <div className="mb-8 mt-4 text-red-500">
                  {" "}
                  Note :- All Fields Are Mandatory
                </div>

                <div className="flex flex-col gap-4">
                  <Form>
                    <div className="flex justify-between ">
                      <div className="flex flex-col gap-4">
                        <div className="flex  items-center text-start">
                          <label
                            htmlFor="name"
                            className="text-[#FAA200] w-32 font-medium"
                          >
                            Trainer Name:
                          </label>
                          <Field
                            placeholder="Trainer Name *"
                            type="text"
                            className="h-10 w-96 border-2 border-gray-300 shadow-lg px-2 rounded-md inputShadow"
                            id="name"
                            name="trainerName"
                            required
                          />
                        </div>

                        <div className="flex  items-center text-start">
                          <label
                            htmlFor="name"
                            className="text-[#FAA200] w-32 font-medium"
                          >
                            Whatsapp:
                          </label>
                          <Field
                            placeholder="Whatsapp Number *"
                            type="text"
                            className="h-10 w-96 border-2 border-gray-300 shadow-lg px-2 rounded-md inputShadow"
                            id="name"
                            name="whatsapp"
                            required
                          />
                        </div>

                        <div className="flex  items-center text-start">
                          <label
                            htmlFor="name"
                            className="text-[#FAA200] w-32 font-medium"
                          >
                            Email id:
                          </label>
                          <Field
                            placeholder="Trainer Email  *"
                            type="text"
                            className="h-10 w-96 border-2 border-gray-300 shadow-lg px-2 rounded-md inputShadow"
                            id="name"
                            name="email"
              required

                          />
                        </div>

                        <div className="flex  items-center text-start">
                          <label
                            htmlFor="name"
                            className="text-[#FAA200] w-32 font-medium"
                          >
                            Location:
                          </label>
                          <Field
                            placeholder="Location *"
                            type="text"
                            className="h-10 w-96 border-2 border-gray-300 shadow-lg px-2 rounded-md inputShadow"
                            id="name"
                            name="location"
              required

                          />
                        </div>

                        {/* <div className="flex  text-start items-start">
                          <label className="text-[#FAA200] w-32 font-medium">
                            Certifications :{" "}
                          </label>
                          <Field
                            rows="6"
                            className="w-96 rounded-md py-2 px-4 border-[#cdcdcd] border-2 inputShadow"
                            name="certifications"
                            placeholder="Certifications details....*"
                            as="textarea"
                          ></Field>
                        </div> */}
                        <div className="flex  text-start items-center overflow-y-scroll scrollbar-hide">
                          <label
                            htmlFor="name"
                            className="text-[#FAA200] w-32 font-medium"
                          >
                            Certifications :
                          </label>

                          <FieldArray name="certifications">
                            {(fieldArrayProps) => {
                              const { push, remove, form } = fieldArrayProps;
                              const { values } = form;
                              const { certifications } = values;

                              return (
                                <div>
                                  {certifications.map(
                                    (certifications, index) => (
                                      <div key={index}>
                                        <label className="text-[#FAA200] w-32 font-medium mr-3">
                                          {" "}
                                          {/* {index + 1} : */}
                                        </label>
                                        <Field
                                          className="mt-4 w-72 inputShadow"
                                          placeholder="Certifications"
                                          name={`certifications[${index}]`}
                                        />
                                        {index > 0 && (
                                          <button
                                            type="button"
                                            onClick={() => remove(index)}
                                          >
                                            <HiOutlineX className="text-red-500 w-4 h-4 "></HiOutlineX>
                                          </button>
                                        )}
                                      </div>
                                    )
                                  )}
                                  <div className="text-right ">
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

                      <div>
                        <div className="flex flex-col gap-4">
                          {/* <div className="flex  text-start items-start">
                            <label className="text-[#FAA200] w-32 font-medium">
                              Specializations :{" "}
                            </label>
                            <Field
                              rows="6"
                              className="w-96 rounded-md py-2 px-4 border-[#cdcdcd] border-2 inputShadow"
                              name="specializations"
                              placeholder="Specializations details....*"
                              as="textarea"
                            ></Field>
                          </div> */}

                          <div className="flex  text-start items-center">
                            <label
                              htmlFor="name"
                              className="text-[#FAA200] w-32 font-medium"
                            >
                              Image Upload :
                            </label>
                            <input
                              className="w-96 h-10"
                              accept="image"
                              id="file"
                              type="file"
                              onChange={(e) => {
                                // @ts-ignore
                                imgConvert(e.target.files[0]);
                              }}
                            />
                          </div>
                          <div className="flex  items-center text-start">
                            <label
                              htmlFor="name"
                              className="text-[#FAA200] w-32 font-medium"
                            >
                              Experience (years):
                            </label>
                            <Field
                              placeholder="Experience *"
                              type="number"
                              className="h-10 w-96 border-2 border-gray-300 shadow-lg px-2 rounded-md inputShadow"
                              id="name"
                              name="experience"
                            />
                          </div>
                          <div className="flex  items-center text-start">
                            <label
                              htmlFor="name"
                              className="text-[#FAA200] w-32 font-medium"
                            >
                              Expertise:
                            </label>
                            <Field
                              placeholder="Expertise  *"
                              type="text"
                              className="h-10 w-96 border-2 border-gray-300 shadow-lg px-2 rounded-md inputShadow"
                              id="name"
                              name="expertise"
                            />
                          </div>
                          <div className="flex  items-center text-start">
                            <label
                              htmlFor="name"
                              className="text-[#FAA200] w-32 font-medium"
                            >
                              Pin:
                            </label>
                            <Field
                              placeholder="Pin  *"
                              type="text"
                              className="h-10 w-96 border-2 border-gray-300 shadow-lg px-2 rounded-md inputShadow"
                              id="name"
                              name="pin"
                            />
                          </div>
                          <div className="flex  text-start items-center overflow-y-scroll scrollbar-hide">
                            <label
                              htmlFor="name"
                              className="text-[#FAA200] w-32 font-medium"
                            >
                              Specializations :
                            </label>

                            <FieldArray name="specializations">
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { specializations } = values;

                                return (
                                  <div>
                                    {specializations.map(
                                      (specializations, index) => (
                                        <div key={index}>
                                          <label className="text-[#FAA200] w-32 font-medium mr-3">
                                            {" "}
                                            {/* {index + 1} : */}
                                          </label>
                                          <Field
                                            className="mt-4 w-72 inputShadow"
                                            placeholder="Specialization"
                                            name={`specializations[${index}]`}
                                          />
                                          {index > 0 && (
                                            <button
                                              type="button"
                                              onClick={() => remove(index)}
                                            >
                                              <HiOutlineX className="text-red-500 w-4 h-4 "></HiOutlineX>
                                            </button>
                                          )}
                                        </div>
                                      )
                                    )}
                                    <div className="text-right ">
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

                    {/* <button type="reset">Reset</button> */}
                    <div className="flex items-center text-center justify-center">
                      <button
                        className="text-white bg-[#283143]  text-lg mt-12 mb-4 py-2 px-10 rounded-md hover:-translate-y-1 hover:scale-110  duration-300"
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
  );
}

export default TrainerForm;
