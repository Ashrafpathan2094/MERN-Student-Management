import React from "react";

import * as yup from "yup";




export const validateSchema = yup.object().shape({
    regNumber: yup.number().required().min(2, "RegNumber should be Atleast 2 numbers"),
    name: yup.string().required().min(4, "Name should be Atleast 4 Characters"),
    grade: yup.string().required().min(1, "Grade should be Atleast 1 Characters").max(1, "Grade should be only one character "),
    section: yup.string().required().min(1, "Section should be Atleast 1 Characters").max(1, "Section should be only one character "),
})


