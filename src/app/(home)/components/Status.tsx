import StatusPill from "@/components/StatusPill";

export default function Status() {
    return (
        <>
            <div className="bg-accent-primary py-48">
                    <h1 className="text-center text-7xl">Oh hey 👋</h1>
            </div>
            <div className="bg-primary py-32">
                <div className="">
                    <div className="mx-auto max-w-prose p-4 flex flex-col gap-12">
                        <StatusPill/>
                    </div>
                </div>
            </div>
        </>
    )
}