import * as Yup from 'yup';

export const homeListInitialValues = {
  homeType: '', 
  bedrooms: '',
  bathrooms: '',
  squareFeet: '',
  parkingSpaces: 'none',
  acceptedTerms: false, 
}

export const homeListingValidationSchema = 
  Yup.object({
    acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),

     homeType: Yup.string()
     .oneOf(
       ['detached', 'semi-detached', 'townhouse', 'apartment', 'other'],
       'Home Type not correct!'
     )
     .required('Please select your home type'),

     bedrooms: Yup.string()
     .oneOf(
       ['0','1', '2', '3', '4', '5'],
       'No of bedrooms not correct!'
     )
     .required('Please select no of bedrooms'),

     bathrooms: Yup.string()
     .oneOf(
       ['0','1', '2', '3', '4', '5'],
       'No of bedrooms not correct!'
     )
     .required('Please select no of bathrooms'),

     squareFeet: Yup.number().positive().integer()
     .typeError("Square footage should contain numbers only")
     .required('Please enter square footage')
 });

export const handleHomeListingSubmit = (values, setSubmitting) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}