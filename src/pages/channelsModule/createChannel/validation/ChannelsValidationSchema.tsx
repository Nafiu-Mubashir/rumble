import * as Yup from "yup";

const ChannelsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .max(50, "Name must be at most 50 characters"),
  title: Yup.string()
    .required("Title is required")
    .max(100, "Title must be at most 100 characters"),
  description: Yup.string()
    .required("Description is required")
    .max(500, "Description must be at most 500 characters"),
  facebook: Yup.string().url("Enter a valid URL"),
  twitter: Yup.string().url("Enter a valid URL"),
  truthSocial: Yup.string().url("Enter a valid URL"),
  instagram: Yup.string().url("Enter a valid URL"),
});

export default ChannelsValidationSchema;
