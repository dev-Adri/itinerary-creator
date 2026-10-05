import DPC from "./_components/dpc/day_package_container";
import { Button } from "@/components/ui/button";

export default function CostsheetPage() {
    return (
        <div className="h-screen flex">
            <div id="packages-section" className="flex-1 overflow-y-auto">
                <div className="">
                    <Button className="font-mont font-extrabold w-28 h-10">
                        Add Date
                    </Button>
                </div>
                <div className="h-12.5"></div>
                <DPC></DPC>
            </div>
            <div
                id="cost-breakdown"
                className="min-h-screen w-80 shadow-xl"
            ></div>
        </div>
    );
}
