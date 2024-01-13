import React from "react";
import Navbar from "../Components/navbar";
import Framework from "../Components/framework";
import {addMessage} from "../Utils/FirebaseHandler"
import { useFormik } from 'formik';

function MessagePage(){
    
        const formik = useFormik({
            initialValues: {
            name: '',
            message: '',
        },
        onSubmit: async (values) => {
            addMessage(values.name, values.message);
            
        },
      
        validate: (values) => {
            const errors = {};
      
            if (!values.name) {
                errors.name = 'Name is Required';
            }
            if (!values.message) {
                errors.message = 'Message is Required';
            }
            return errors;
        },
    });

    return(
        <>
        
            <Framework/>
            <Navbar />
            <div></div>
            <div class="container-fluid  bg-dark w-100 bg-dark py-4 px-5 pt-5 mx-0" style={{height: '100vh', width: 'auto'}}>
                <div class="row justify-content-md-center">
                    <div class = "col-md-8">
                <div class="card text-white"  style={{backgroundImage:"linear-gradient(rgb(16,16,16) 20%,rgb(195, 40, 101)100% )"}}>
                    <div class="card-header">
                        Leave me a Message
                    </div>
                    <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Your Name or Anonymous"
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-danger">{formik.errors.name}</div>
                        )}
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">
                            Message
                        </label>
                        <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Leave Your Message Here"
                            {...formik.getFieldProps('message')}
                        ></textarea>
                        {formik.touched.message && formik.errors.message && (
                            <div className="text-danger">{formik.errors.message}</div>
                        )}
                    </div>

                    </div>
                    <button type="submit" class="btn btn-dark my-2 mx-4" onClick={formik.handleSubmit}>Submit</button>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default MessagePage;