import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name: yup.string().trim()
    .min(2, 'First name must be at least 2 characters.')
    .required('First name required.'),
    last_name: yup.string().trim()
    .min(2, 'Last name must be at least 2 characters.')
    .required('Last name required.'),
    email: yup.string().trim()
    .email('Must use a valid email address.')
    .required('Email required.'),
    password: yup.string().trim()
    .min(8, 'Password must be at least 8 characters.')
    .required('Password required.'),
    tos: yup.required('You must agree to the Terms of Service.')
});