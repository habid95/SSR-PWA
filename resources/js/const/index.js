
const companyFields = [
    { type: 'text', name: 'companyName', placeholder: 'Compañía', isRequired: true },
    { type: 'number', name: 'companyPostalCode', placeholder: 'Código Postal', isRequired: true },
    { type: 'number', name: 'companyPhone', placeholder: 'No. Telefónico', isRequired: true },
    { type: 'email', name: 'emailcompany', placeholder: 'Email', isRequired: true },
    { type: 'country', name: 'countrycompany', placeholder: 'Pais', isRequired: true },
];


const invoicesData = [
    { type: 'text', name: 'id', placeholder: 'id', isRequired: true },
    { type: 'text', name: 'description', placeholder: 'description', isRequired: true },
    { type: 'number', name: 'quantity', placeholder: 'quantity', isRequired: true },
    { type: 'number', name: 'price', placeholder: 'price', isRequired: true },
];

const clientFields = [
    { type: 'number', name: 'clientPostalCode', placeholder: 'Código Postal', isRequired: true },
    { type: 'text', name: 'clientName', placeholder: 'Cliente', isRequired: true },
    { type: 'number', name: 'clientPhone', placeholder: 'No. Telefónico', isRequired: true },
];

const InvoiceFields = [
    { label: 'No. Factura', type: 'text', name: 'invoiceNumber', placeholder: 'No. Factura', isRequired: true },
    { label: 'Fecha factura', type: 'date', name: 'invoiceDate', placeholder: 'Fecha de Factura', isRequired: true },
    { label: 'Fecha vencimiento', type: 'date', name: 'invoiceDueDate', placeholder: 'Fecha de Vencimiento', isRequired: true },
];

export { companyFields, invoicesData, clientFields, InvoiceFields };