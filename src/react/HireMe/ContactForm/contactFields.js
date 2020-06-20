const ffSharedProps = {
    required: true, 
    value: '',
    feedback: {
        type: 'initial',
        message: '',
    },
}

export const contactFormFields = [
    { ...ffSharedProps, type: 'text', id: 'contact-name', label: 'Name' },
    { ...ffSharedProps, type: 'email', id: 'contact-email', label: 'Email' },
    { ...ffSharedProps, type: 'teaxtarea', id: 'contact-message', label: 'Message' },
];