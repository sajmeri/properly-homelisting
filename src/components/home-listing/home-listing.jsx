 import React from 'react';
 import { Formik, Form } from 'formik';
 
 import { TextInput, Select, Checkbox, TextArea } from "../../helpers/formik-components";
 import { homeListInitialValues, homeListingValidationSchema, handleHomeListingSubmit } from "../../helpers/home-listing";
 import "./home-listing.css";
 
 /* 
  This form has an example of one of each field types - an input filed, an input field that
  accepts only numeric values, a select option field and a checkbox.

  The project's readme file has the reason behind using Formik and Yup. 
 */
 const HomeListing = () => {
   return (
     <>
       <h1>Tell us about your home!</h1>
       <Formik
         initialValues={ homeListInitialValues }
         validationSchema={ homeListingValidationSchema }
         onSubmit={(values, {setSubmitting}) => handleHomeListingSubmit(values, setSubmitting)}
       >
         <Form>
            <Select label="Home type *" name="homeType" data-testid="homeType">
                <option value="">Select a Home type</option>
                <option value="detached" data-testid="detached">Detached</option>
                <option value="semi-detached">Semi-detached</option>
                <option value="townhouse">Townhouse</option>
                <option value="apartment">Apartment</option>
            </Select>
          
            <Select label="Bedrooms *" name="bedrooms" data-testid="bedrooms" className="side-by-side">
                <option value=""></option>
                <option value="0">0</option>
                <option value="1" data-testid="1bedroom">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </Select>

            <Select label="Bathrooms *" name="bathrooms" data-testid="bathrooms" className="side-by-side">
                <option value=""></option>
                <option value="0">0</option>
                <option value="1" data-testid="1bathroom">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </Select>

            <TextInput
             label="Square feet *"
             name="squareFeet"
             type="text"
             placeholder=""
             data-testid="squareFeet"
             className="thin"
             onFocus={(e)=>e.target.value=""}
            />

            <TextInput
             label="Parking spaces"
             name="parkingSpaces"
             type="text"
             placeholder="none"
             className="thin"
             onFocus={(e)=>e.target.value=""}
           />

            <TextArea
             label="Additional Information"
             name="additonalInfo"
             type="text"
             placeholder="none"
             onFocus={(e)=>e.target.value=""}
           />


            
           <Checkbox name="acceptedTerms" data-testid="acceptedTerms">
             I accept the terms and conditions
           </Checkbox>
 
           <button type="submit" name="submit">Submit</button>
         </Form>
       </Formik>
     </>
   );
 };

 export default HomeListing;