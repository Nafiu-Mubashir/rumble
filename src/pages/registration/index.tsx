import {
  Button,
  Checkbox,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import registrationSchema from "./validation/registrationSchema";

const Registration = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      password: '',
      retypePassword: '',
      email: '',
      retypeEmail: '',
      country: '',
      birthday: '',
      referrer: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      postalCode: '',
      phoneNumber: '',
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      console.log('Registration values', values);
      // alert(JSON.stringify(values, null, 2));
      navigate('/registration-success');
    },
  });


  return (
    <div className="w-[90%] mx-auto space-y-8 py-10">
      <h3 className="dark:text-gray-400 font-semibold text-2xl">
        REGISTER WITH RUMBLE
      </h3>

      <form onSubmit={formik.handleSubmit} className="space-y-3">
        <h3 className="dark:text-gray-400 font-semibold text-2xl">
          FREE ACCOUNT REGISTRATION
        </h3>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <TextInput
              placeholder="Name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && formik.errors.name}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
            />
            <TextInput
              placeholder="Username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              error={formik.touched.username && formik.errors.username}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <PasswordInput
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
            />
            <PasswordInput
              placeholder="Re-type Password"
              name="retypePassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.retypePassword}
              error={formik.touched.retypePassword && formik.errors.retypePassword}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TextInput
              placeholder="E-mail Address"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
            />
            <TextInput
              placeholder="Re-type E-mail Address"
              name="retypeEmail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.retypeEmail}
              error={formik.touched.retypeEmail && formik.errors.retypeEmail}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Select
              name="country"
              onChange={value => formik.setFieldValue('country', value)}
              onBlur={formik.handleBlur}
              value={formik.values.country}
              error={formik.touched.country && formik.errors.country}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                dropdown:
                  "dark:border-gray-700 dark:bg-rumble-content-dark dark:text-white",
                option: "hover:!bg-gray-700",
              }}
              size="md"
              placeholder="Country*"
              data={["USA", "Canada", "UK", "Australia"]}
            />
          </div>
          <div className="full">
            <label
              htmlFor="birthday"
              className="block mb-1 font-medium text-gray-900 dark:text-gray-400 text-xl">
              Birthday
            </label>
            <input
              type="date"
              name="birthday"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthday}
              className="dark:bg-rumble-content-dark h-full w-1/2 py-[0.4rem] dark:text-gray-400 border dark:border-gray-700 px-4 border-gray-200 focus:ring-gray-200 focus:border-gray-200"
            />
             {formik.touched.birthday && formik.errors.birthday && (
              <div className="text-red-500 text-sm">{formik.errors.birthday}</div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="dark:text-gray-400 font-semibold text-2xl">
            OPTIONAL FIELDS
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3">
              <TextInput
                placeholder="Referrer"
                name="referrer"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.referrer}
                error={formik.touched.referrer && formik.errors.referrer}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
            </div>
            <TextInput
              placeholder="Address"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              error={formik.touched.address && formik.errors.address}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
            />
            <TextInput
              placeholder="Address (Suite, unit, floor, etc.)"
              name="address2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address2}
              error={formik.touched.address2 && formik.errors.address2}
              classNames={{
                input:
                  "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
              }}
              size="md"
              radius={0}
            />
            <div className="grid grid-cols-2 gap-3">
              <TextInput
                placeholder="City"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                error={formik.touched.city && formik.errors.city}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
              <TextInput
                placeholder="State/Province"
                name="state"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
                error={formik.touched.state && formik.errors.state}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <TextInput
                placeholder="Postal Code"
                name="postalCode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postalCode}
                error={formik.touched.postalCode && formik.errors.postalCode}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                }}
                size="md"
                radius={0}
              />
              <NumberInput
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={value => formik.setFieldValue('phoneNumber', value)}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                error={formik.touched.phoneNumber && formik.errors.phoneNumber}
                classNames={{
                  input:
                    "border-gray-200 focus:ring-gray-200 dark:text-gray-400 focus:border-gray-200 dark:bg-rumble-content-dark dark:border-gray-700",
                  controls: "!hidden",
                }}
                size="md"
                radius={0}
              />
            </div>
          </div>
        </div>

        <div>
          <Checkbox
            defaultChecked
            label={
              <>
                By creating an account with titan and checking this box, you are
                providing your written agreement with, and consent to, titan
                Website Terms and Conditions of Use and Agency Agreement and Titan
                Privacy Policy, respectively. Titan Website Terms and Conditions
                of Use and Agency Agreement can be found here:
                <Link
                  to="https://titan.com/s/terms"
                  className="px-1">
                  https://titan.com/s/terms
                </Link>
                , and Titan Privacy Policy can be found here:
                <Link
                  to="https://titan.com/s/privacy"
                  className="px-1">
                  https://titan.com/s/privacy
                </Link>
                .
              </>
            }
            className="dark:text-gray-500"
          />
        </div>

        <Button
          type="submit"
          radius={"lg"}
          size="md"
          className="!bg-rumble-green-dark !rounded-full dark:hover:bg-rumble-green"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Registration;
