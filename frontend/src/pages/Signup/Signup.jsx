import styles from "./Signup.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUser } from "../../apis/users";

function Signup() {
  // useNavigate hook from react-router-dom to navigate programmatically
  const navigate = useNavigate();

  // Define the validation schema using Yup
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Le nom doit être au moins 2 caractères"),
    email: yup
      .string()
      .required("Il faut preciser votre email")
      .email("Email invalide"),
    password: yup
      .string()
      .required("Il faut preciser votre mot de passe")
      .min(6, "Le mot de passe doit être au moins 6 caractères"),
  });

  // Define initial values for the form fields
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  // Handle form submission
  const submit = handleSubmit(async (user) => {
    try {
      // Clear any previous errors
      clearErrors();
      // Call the createUser API
      await createUser(user);
      // Navigate to the signin page
      navigate("/signin");
    } catch (message) {
      // Set a gneric error
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div className="flex-fill d-flex align-items-center justify-content-center">
      <form
        onSubmit={submit}
        className={`${styles.form} d-flex flex-column card p-20`}
      >
        <h2 className="mb-10 text-center">Inscription</h2>
        <div className="mb-10 d-flex flex-column">
          <label htmlFor="name">Nom</label>
          <input type="text" {...register("name")} id="name" />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>
        <div className="mb-10 d-flex flex-column">
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} id="email" />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="mb-10 d-flex flex-column">
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} id="password" />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        <div className="mt-10 d-flex justify-content-center">
          <button disabled={isSubmitting} className="btn btn-primary">
            Inscription
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
