import StatusPill from "@/app/(home)/components/StatusPill";
import ResumeCTA from "@/app/(home)/components/ResumeCTA";

export default function Status() {
    return (
        <div className="bg-primary py-4">
            <div className="">
                <div className="mx-auto max-w-prose p-4 flex flex-col gap-12">
                    <StatusPill/>
                    {/*<ResumeCTA />*/}
                </div>
            </div>
        </div>
    )
}