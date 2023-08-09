import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const EditProfileForm = ({ firstName, lastName, email }) => {
  return (
    <Formik
      initialValues={{
        firstName: "Henry",
        lastName: "T",
        email: "henry@gmail.com",
        interests: [
          { interestName: "Swimming", interestDescription: "Be like phelps" },
          { interestName: "Basketball", interestDescription: "Ball like Kobe" },
        ],
        expertise: [
          {
            expertiseName: "Swimming",
            expertiseDescription: "Be like phelps",
            yearsOfExperience: 5,
          },
          {
            expertiseName: "Basketball",
            expertiseDescription: "Ball like Kobe",
            yearsOfExperience: 10,
          },
        ],
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        interests: Yup.array().of(
          Yup.object()
            .shape({
              interestName: Yup.string().required("Required"),
              interestDescription: Yup.string().required("Required"),
            })
            .required("Required")
        ),
        expertise: Yup.array().of(
          Yup.object().shape({
            expertiseName: Yup.string().required("Required"),
            expertiseDescription: Yup.string().required("Required"),
            yearsOfExperience: Yup.number().required("Required"),
          })
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" placeholder={values.firstName} />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" placeholder={values.lastName} />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" placeholder={values.email} />
          <ErrorMessage name="email" />

          <h2>Interests</h2>
          <FieldArray name="interests">
            {({ insert, remove, push }) => (
              <div>
                {values.interests.length > 0 &&
                  values.interests.map((interest, index) => (
                    <div key={index}>
                      <div>
                        <label htmlFor={`interest.${index}.interestName`}>
                          Interest Name
                        </label>
                        <Field
                          name={`interests.${index}.interestName`}
                          placeholder="Interest"
                          type="text"
                        />
                        <ErrorMessage
                          name={`interests.${index}.interestName`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`interest.${index}.interestDescription`}
                        >
                          Interest Description
                        </label>

                        <Field
                          name={`interests.${index}.interestDescription`}
                          placeholder="Interest Description"
                          type="text"
                          as="textarea"
                        />
                        <ErrorMessage
                          name={`interests.${index}.interestDescription`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <span>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </span>
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() =>
                    push({ interestName: "", interestDescription: "" })
                  }
                >
                  Add Interest
                </button>
              </div>
            )}
          </FieldArray>
          <h2>Expertise</h2>
          <FieldArray name="expertise">
            {({ insert, remove, push }) => (
              <div>
                {values.expertise.length > 0 &&
                  values.expertise.map((expertise, index) => (
                    <div key={index}>
                      <div>
                        <label htmlFor={`expertise.${index}.expertiseName`}>
                          Expertise
                        </label>

                        <Field
                          name={`expertise.${index}.expertiseName`}
                          placeholder="Expertise"
                          type="text"
                        />
                        <ErrorMessage
                          name={`expertise.${index}.expertiseName`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div>
                        <label htmlFor={`expertise.${index}.yearsOfExperience`}>
                          Years of Experience
                        </label>

                        <Field
                          name={`expertise.${index}.yearsOfExperience`}
                          placeholder="Years of Experience"
                          type="number"
                        />
                        <ErrorMessage
                          name={`expertise.${index}.yearsOfExperience`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`expertise.${index}.expertiseDescription`}
                        >
                          Description
                        </label>

                        <Field
                          name={`expertise.${index}.expertiseDescription`}
                          placeholder="Expertise Description"
                          type="text"
                          as="textarea"
                        />
                        <ErrorMessage
                          name={`expertise.${index}.expertiseDescription`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <span>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </span>
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() =>
                    push({
                      expertiseName: "",
                      expertiseDescription: "",
                      yearsOfExperience: 0,
                    })
                  }
                >
                  Add Expertise
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Update Profile</button>
        </Form>
      )}
    </Formik>
  );
};

export default EditProfileForm;
