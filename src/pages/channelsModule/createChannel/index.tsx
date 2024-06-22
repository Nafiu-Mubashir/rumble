import { Button, Divider, Grid, TextInput } from "@mantine/core";

import SideTab from "../../../components/sideTab";
import ChannelsValidationSchema from "./validation/ChannelsValidationSchema";
import { useFormik } from "formik";

const CreateChannel = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      description: "",
      facebook: "",
      twitter: "",
      truthSocial: "",
      instagram: "",
    },
    validationSchema: ChannelsValidationSchema, // Use the imported validation schema here
    onSubmit: (values) => {
      console.log("Form Values", values);
      // Handle form submission
    },
  });
  // return (
  //   <div className="p-4 dark:text-white">
  //     <h1 className="text-xl font-semibold text-titan-blue uppercase">
  //       CREATE A NEW CHANNEL
  //     </h1>
  //     <Grid
  //       justify="space-between"
  //       classNames={{
  //         root: "gap-3 py-4 lg:py-8 md:p-4 lg:p-6",
  //       }}>
  //       <Grid.Col
  //         span={{ base: 12, md: 12, lg: 9 }}
  //         classNames={{
  //           col: "",
  //         }}>
  //         <form className="space-y-4">
  //           <div className="full">
  //             <label
  //               htmlFor="date"
  //               className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
  //               Channel Details:*
  //             </label>
  //           </div>
  //           <div className="grid grid-col-1 md:grid-cols-2 gap-3">
  //             <TextInput
  //               placeholder="Name"
  //               classNames={{
  //                 input:
  //                   "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
  //               }}
  //               size="md"
  //               radius={0}
  //               // error="Please provide a username."
  //             />
  //             <TextInput
  //               placeholder="Title"
  //               classNames={{
  //                 input:
  //                   "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
  //               }}
  //               size="md"
  //               radius={0}
  //               // error="Please provide a username."
  //             />
  //           </div>
  //           <TextInput
  //             placeholder="Description"
  //             classNames={{
  //               input:
  //                 "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
  //             }}
  //             size="md"
  //             radius={0}
  //             // error="Please provide a username."
  //           />

  //           <Divider my="md" />

  //           <div className="grid grid-col-1 md:grid-cols-2 gap-3">
  //             <div className="space-y-3">
  //               <div className="full">
  //                 <label
  //                   htmlFor="date"
  //                   className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
  //                   THUMBNAIL:
  //                 </label>
  //               </div>
  //               <Button
  //                 className="!bg-titan-blue"
  //                 radius={5}>
  //                 <div className="flex items-center justify-center w-full h-full">
  //                   <label
  //                     htmlFor="dropzone-file"
  //                     className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
  //                     <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
  //                       <p className="text-md">Broese</p>
  //                     </div>
  //                     <input
  //                       // onClick={imageSelector}
  //                       id="dropzone-file"
  //                       type="file"
  //                       className="hidden"
  //                     />
  //                   </label>
  //                 </div>
  //               </Button>
  //               <p className="text-xs">
  //                 Preferred size: 150x150. Image types: PNG, JPG, GIF.
  //               </p>
  //             </div>
  //             <div className="space-y-3">
  //               <div className="full">
  //                 <label
  //                   htmlFor="date"
  //                   className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
  //                   BACKSPLASH:
  //                 </label>
  //               </div>
  //               <Button
  //                 className="!bg-titan-blue"
  //                 radius={5}>
  //                 <div className="flex items-center justify-center w-full h-full">
  //                   <label
  //                     htmlFor="dropzone-file"
  //                     className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
  //                     <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
  //                       <p className="text-md">Broese</p>
  //                     </div>
  //                     <input
  //                       // onClick={imageSelector}
  //                       id="dropzone-file"
  //                       type="file"
  //                       className="hidden"
  //                     />
  //                   </label>
  //                 </div>
  //               </Button>
  //               <p className="text-xs">
  //                 Preferred size: 150x150. Image types: PNG, JPG, GIF.
  //               </p>
  //             </div>
  //           </div>

  //           <Divider my="md" />

  //           <div className="full">
  //             <label
  //               htmlFor="date"
  //               className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
  //               SOCIAL URL(S)
  //             </label>
  //           </div>
  //           <div className="grid grid-col-1 md:grid-cols-2 gap-3">
  //             <TextInput
  //               placeholder="Facebook"
  //               classNames={{
  //                 input:
  //                   "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
  //               }}
  //               size="md"
  //               radius={0}
  //               // error="Please provide a username."
  //             />
  //             <TextInput
  //               placeholder="X"
  //               classNames={{
  //                 input:
  //                   "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
  //               }}
  //               size="md"
  //               radius={0}
  //               // error="Please provide a username."
  //             />
  //           </div>
  //           <div className="grid grid-col-1 md:grid-cols-2 gap-3">
  //             <TextInput
  //               placeholder="TruthSocial"
  //               classNames={{
  //                 input:
  //                   "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
  //               }}
  //               size="md"
  //               radius={0}
  //               // error="Please provide a username."
  //             />
  //             <TextInput
  //               placeholder="Instagram"
  //               classNames={{
  //                 input:
  //                   "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
  //               }}
  //               size="md"
  //               radius={0}
  //               // error="Please provide a username."
  //             />
  //           </div>
  //           <div className="flex justify-end">
  //             <Button
  //               radius={0}
  //               className="!bg-titan-blue text-white">
  //               Create
  //             </Button>
  //           </div>
  //         </form>
  //       </Grid.Col>
  //       <Grid.Col
  //         span={{ base: 12, md: 12, lg: 3 }}
  //         classNames={{
  //           col: "hidden lg:block",
  //         }}>
  //         <SideTab />
  //       </Grid.Col>
  //     </Grid>
  //   </div>
  // );

  return (
    <div className="p-4 py-8 dark:text-white">
      <h1 className="text-xl font-semibold text-titan-blue dark:text-white uppercase">
        CREATE A NEW CHANNEL
      </h1>
      <Grid
        justify="space-between"
        classNames={{
          root: "gap-3 py-4 lg:py-8 md:p-4 lg:p-6",
        }}>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 9 }}
          classNames={{
            col: "",
          }}>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="full">
              <label
                htmlFor="name"
                className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                Channel Details:*
              </label>
              <TextInput
                id="name"
                name="name"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-3">
              <TextInput
                id="title"
                name="title"
                placeholder="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500 text-sm">{formik.errors.title}</div>
              ) : null}
            </div>
            <TextInput
              id="description"
              name="description"
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500 text-sm">{formik.errors.description}</div>
            ) : null}

            <Divider my="md" />

            <div className="grid grid-col-1 md:grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="full">
                  <label
                    htmlFor="thumbnail"
                    className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                    THUMBNAIL:
                  </label>
                </div>
                <Button
                  className="!bg-titan-blue"
                  radius={5}>
                  <div className="flex items-center justify-center w-full h-full">
                    <label
                      htmlFor="dropzone-file-thumbnail"
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                        <p className="text-md">Broese</p>
                      </div>
                      <input
                        id="dropzone-file-thumbnail"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </Button>
                <p className="text-xs">
                  Preferred size: 150x150. Image types: PNG, JPG, GIF.
                </p>
              </div>
              <div className="space-y-3">
                <div className="full">
                  <label
                    htmlFor="backsplash"
                    className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                    BACKSPLASH:
                  </label>
                </div>
                <Button
                  className="!bg-titan-blue"
                  radius={5}>
                  <div className="flex items-center justify-center w-full h-full">
                    <label
                      htmlFor="dropzone-file-backsplash"
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-4">
                        <p className="text-md">Broese</p>
                      </div>
                      <input
                        id="dropzone-file-backsplash"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </Button>
                <p className="text-xs">
                  Preferred size: 150x150. Image types: PNG, JPG, GIF.
                </p>
              </div>
            </div>

            <Divider my="md" />

            <div className="full">
              <label
                htmlFor="socialUrls"
                className="block mb-1 text-gray-900 dark:text-gray-400 text-xl">
                SOCIAL URL(S)
              </label>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-3">
              <TextInput
                id="facebook"
                name="facebook"
                placeholder="Facebook"
                value={formik.values.facebook}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
              {formik.touched.facebook && formik.errors.facebook ? (
                <div className="text-red-500 text-sm">{formik.errors.facebook}</div>
              ) : null}
              <TextInput
                id="twitter"
                name="twitter"
                placeholder="X"
                value={formik.values.twitter}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
              {formik.touched.twitter && formik.errors.twitter ? (
                <div className="text-red-500 text-sm">{formik.errors.twitter}</div>
              ) : null}
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-3">
              <TextInput
                id="truthSocial"
                name="truthSocial"
                placeholder="TruthSocial"
                value={formik.values.truthSocial}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
              {formik.touched.truthSocial && formik.errors.truthSocial ? (
                <div className="text-red-500 text-sm">{formik.errors.truthSocial}</div>
              ) : null}
              <TextInput
                id="instagram"
                name="instagram"
                placeholder="Instagram"
                value={formik.values.instagram}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
              {formik.touched.instagram && formik.errors.instagram ? (
                <div className="text-red-500 text-sm">{formik.errors.instagram}</div>
              ) : null}
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                radius={0}
                className="!bg-titan-blue text-white"
                disabled={!formik.isValid}
              >
                Create
              </Button>
            </div>
          </form>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 3 }}
          classNames={{
            col: "hidden lg:block",
          }}>
          <SideTab />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default CreateChannel;
