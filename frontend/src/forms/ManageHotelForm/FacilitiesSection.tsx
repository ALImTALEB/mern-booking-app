import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { hotelFacilities } from "../../config/hotel-options-config";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl mb-3"> Facilities </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2">
        {hotelFacilities.map((facility) => (
          <label
            key={facility}
            className="text-gray-700 flex items-center gap-1"
          >
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            <span> {facility} </span>
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 font-bold text-sm">
          {" "}
          {errors.facilities.message}{" "}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;
