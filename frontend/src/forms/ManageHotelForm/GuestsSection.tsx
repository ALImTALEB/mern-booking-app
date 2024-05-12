import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl mb-3">Guests</h2>
      <div
        className="flex flex-col gap-5
        md:flex-row
        bg-gray-100
        p-4
        rounded
        "
      >
        <label className="text-gray-700 font-bold flex-1">
          Adults
          <input
            type="number"
            min={1}
            className="
                border rounded w-full py-1 px-2 font-normal
                "
            {...register("adultCount", { required: "This field is required" })}
          />
          {errors.adultCount && (
            <span className="text-red-500 text-sm">{errors.adultCount.message}</span>
          )}
        </label>

        <label className="text-gray-700 font-bold flex-1">
          Children
          <input
            type="number"
            min={0}
            className="
                border rounded w-full py-1 px-2 font-normal
                "
            {...register("childCount", { required: "This field is required" })}
          />
          {errors.childCount && (
            <span className="text-red-500 text-sm">
              {errors.childCount.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
