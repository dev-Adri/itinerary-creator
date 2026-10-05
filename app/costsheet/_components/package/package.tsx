import ResizableInput from "@/components/ui/resizable_input";

export default function Package() {
  return <div className="flex flex-row gap-1 rounded-[8px] bg-[#2C3E5050] w-[calc(100%-24px)] h-10 p-1">
    <ResizableInput type="location"></ResizableInput>
    <ResizableInput type="activity"></ResizableInput>
  </div>;
}
