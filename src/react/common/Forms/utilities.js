/*---------------------------
| This may expand to do more, hence the shared function
---------------------------*/
export const handleFormFieldChange = (newFormField, onChange, e) => {
    newFormField.value = e.target.value;
    onChange(newFormField, e);
}

export const findFormField = (id, formFields) => {
    return formFields.find(ff => ff.id === id);
}