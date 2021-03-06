export interface Users {
  username: string;
  password: string;
  confirm: string;
  firstname: string;
  lastname: string;
  email: string;
  mobile_number: string;
}
export interface Values {
  values: Users;
  errors: Users;
}

const Validation = ({ values, errors }: Values) => {
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!values.confirm) {
    errors.confirm = "Password is required";
  } else if (values.password !== values.confirm) {
    errors.confirm = "Passswords do not match, please try again";
  }

  if (!values.firstname) {
    errors.firstname = "Firstname required";
  }

  if (!values.lastname) {
    errors.lastname = "Lastname required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    //eslint-disable-next-line
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Email is invalid.";
  }

  if (!values.mobile_number) {
    errors.mobile_number = "Phone number required";
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      values.mobile_number
    )
  ) {
    errors.mobile_number = "Phone number is invalid";
  }

  return errors;
};

export default Validation;
