import * as React from "react";
import useForkRef from "@mui/utils/useForkRef";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { format } from "date-fns-jalali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useValidation, validateDate } from "@mui/x-date-pickers/validation";
import {
  useSplitFieldProps,
  useParsedFormat,
  usePickerContext,
} from "@mui/x-date-pickers/hooks";

function ButtonDateField(props) {
  const { internalProps, forwardedProps } = useSplitFieldProps(props, "date");

  const pickerContext = usePickerContext();
  const handleRef = useForkRef(pickerContext.triggerRef, pickerContext.rootRef);
  const parsedFormat = useParsedFormat();
  const { hasValidationError } = useValidation({
    validator: validateDate,
    value: pickerContext.value,
    timezone: pickerContext.timezone,
    props: internalProps,
  });

  // Format the date in Jalali format (e.g., 1404/20/13)
  const valueStr =
    pickerContext.value == null
      ? "انتخاب تاریخ" // Placeholder text in Persian (optional)
      : format(new Date(pickerContext.value), "yyyy/MM/dd"); // Jalali format

  return (
    <Button
      {...forwardedProps}
      variant="outlined"
      color={hasValidationError ? "error" : "primary"}
      ref={handleRef}
      className={pickerContext.rootClassName}
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        width: "100%",
        marginBottom: "13px",
        height: "32px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "transparent",
        borderImage: "initial",
        padding: "6px",
        borderRadius: "6px",
        boxShadow: "1px 2px 3px #5d617624",
        fontSize: "0.75rem",
        outline: 0,
        "&:hover": {
          backgroundColor: "#e3f2fd", // Lighter blue on hover
        },
        "&.Mui-disabled": {
          backgroundColor: "#e0e0e0", // Gray background when disabled
          color: "#9e9e9e", // Gray text when disabled
        },
      }}
      onClick={() => pickerContext.setOpen((prev) => !prev)}
    >
      {pickerContext.label ? `${pickerContext.label}: ${valueStr}` : valueStr}
    </Button>
  );
}

function ButtonFieldDatePicker(props) {
  return (
    <DatePicker {...props} slots={{ ...props.slots, field: ButtonDateField }} />
  );
}

export default function DatePickerMui(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <ButtonFieldDatePicker
        onChange={(value) => {
          // Format the selected date in Jalali format (e.g., 1404/02/14)
          const formattedValue = value
            ? format(new Date(value), "yyyy/MM/dd")
            : null;
          props.handleAction("loadDate", formattedValue);
        }}
      />
    </LocalizationProvider>
  );
}
