"use client";

const TYPE_DEFAULTS = {
  location: {
    width: "w-24",
    placeholder: "LOC"
  },
  activity: {
    width: "w-52",
    placeholder: "ACTIVITY"
  }
}

interface ResizableInputProps {
  type?: keyof typeof TYPE_DEFAULTS; // "location" | "time" | "text"
  width?: string;
  placeholder?: string;
  defaultValue?: string;
}

export default function ResizableInput({
  type = "location",
  width,
  placeholder,
  defaultValue = "",
  ...props
}: ResizableInputProps) {
  // 2. Fall back to preset defaults, but allow explicit props to override them
  const preset = TYPE_DEFAULTS[type] || TYPE_DEFAULTS.text;
  const finalWidth = width || preset.width;
  const finalPlaceholder = placeholder || preset.placeholder;

  return (
    <div
      id="input-styling"
      className={`flex flex-col justify-between items-center bg-[#00000025] rounded-[6px] h-full p-1 ${finalWidth}`}
    >
      <input
        type="text"
        defaultValue={defaultValue}
        placeholder={finalPlaceholder}
        className="bg-transparent text-white text-center font-medium placeholder-white/70 outline-none w-full border-none focus:ring-0 flex-1 min-w-0"
        {...props}
      />
      <div className="w-[98.5%] h-px bg-[#BDBDBD] rounded-full shrink-0" />
    </div>
  );
}
