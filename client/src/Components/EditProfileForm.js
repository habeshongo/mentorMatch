import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import * as Yup from "yup";
import { getProfile, updateProfile } from "../services/api";

const EditProfileForm = () => {
  const queryClient = useQueryClient();
  const { user, isLoading: isAuthLoading } = useAuth0();

  const mutation = useMutation({
    mutationFn: ({ id, user }) => {
      return updateProfile(data.user.id, user);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("profile");
    },
  });
  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(user),
    enabled: !!user,
  });
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <Formik
      initialValues={{
        firstName: data.user.first_name || "",
        lastName: data.user.last_name || "",
        email: data.user.email,
        profile_description: data.user.profile_description || "",
        // interests: [
        //   { interestName: "Swimming", interestDescription: "Be like phelps" },
        //   { interestName: "Basketball", interestDescription: "Ball like Kobe" },
        // ],
        interests: data.user.menteeProfile.map((interest) => {
          return {
            interestName: interest.name_of_subject,
            interestDescription: interest.subject_description,
          };
        }),
        // expertise: [
        //   {
        //     expertiseName: "Swimming",
        //     expertiseDescription: "Be like phelps",
        //     yearsOfExperience: 5,
        //   },
        //   {
        //     expertiseName: "Basketball",
        //     expertiseDescription: "Ball like Kobe",
        //     yearsOfExperience: 10,
        //   },
        // ],
        expertises: data.user.mentorProfile.map((expertise) => {
          return {
            expertiseName: expertise.skillset,
            expertiseDescription: expertise.exp_description,
            yearsOfExperience: expertise.years_of_exp,
          };
        }),
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        profile_description: Yup.string(),
        interests: Yup.array().of(
          Yup.object()
            .shape({
              interestName: Yup.string().required("Required"),
              interestDescription: Yup.string().required("Required"),
            })
            .required("Required")
        ),
        expertises: Yup.array().of(
          Yup.object().shape({
            expertiseName: Yup.string().required("Required"),
            expertiseDescription: Yup.string().required("Required"),
            yearsOfExperience: Yup.number().required("Required"),
          })
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        if (!data) return;
        console.log(values);
        mutation.mutate({ id: data.user.id, user: values });
        // setTimeout(() => {
        //   console.log(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
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

          <label htmlFor="profile_description">Profile Description</label>
          <Field
            name="profile_description"
            type="text"
            placeholder={values.profile_description}
          />
          <ErrorMessage name="profile_description" />

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
          <FieldArray name="expertises">
            {({ insert, remove, push }) => (
              <div>
                {values.expertises.length > 0 &&
                  values.expertises.map((expertise, index) => (
                    <div key={index}>
                      <div>
                        <label htmlFor={`expertises.${index}.expertiseName`}>
                          Expertise
                        </label>

                        <Field
                          name={`expertises.${index}.expertiseName`}
                          placeholder="Expertise"
                          type="text"
                        />
                        <ErrorMessage
                          name={`expertises.${index}.expertiseName`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`expertises.${index}.yearsOfExperience`}
                        >
                          Years of Experience
                        </label>

                        <Field
                          name={`expertises.${index}.yearsOfExperience`}
                          placeholder="Years of Experience"
                          type="number"
                        />
                        <ErrorMessage
                          name={`expertises.${index}.yearsOfExperience`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`expertises.${index}.expertiseDescription`}
                        >
                          Description
                        </label>

                        <Field
                          name={`expertises.${index}.expertiseDescription`}
                          placeholder="Expertise Description"
                          type="text"
                          as="textarea"
                        />
                        <ErrorMessage
                          name={`expertises.${index}.expertiseDescription`}
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
