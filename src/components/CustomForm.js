const CustomForm = ({ title, formData, register, errors, aling }) => {
  return (
    <div className="flex-1">
      {
        title &&
        <h3 className={`pb-4 font-bold text-center ${aling} text-gray-800`}>{title}</h3>
      }
      {formData.map((field, index) => (
          <div key={index} className="flex flex-col">

          <div className="flex items-center space-x-2">
            {
              field.label &&
                (
                  <label className={`block text-sm  text-center md:${aling} w-full`}>{field.label}</label>
                )
            }


            <input
              {...register(field.name, { required: field.isRequired })}
              type={field.type}
              placeholder={field.placeholder}
              className={` w-full text-center ${aling} bg-transparent focus:ring-0 focus:outline-none ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
            />

          </div>
        
            {errors[field.name] && (
              <span className={`text-red-500 w-full text-center md:${aling} text-sm`}>Este campo es requerido.</span>
            )}
          </div>
        ))}
    </div>
  );
};
  
  export default CustomForm;
  