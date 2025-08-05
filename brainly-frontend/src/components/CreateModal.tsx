import CrossIcon from "./CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputPlaceholder";

interface CreateModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateModal({open,onClose}: CreateModalProps) {


    return <div>
        {open && <div className="w-screen h-screen bg-gray-100 fixed top-0 left-0 bg-opacity-80 flex justify-center items-center z-50">
            <div className="flex flex-col justify-center">
                <span className="bg-white bg-opacity-100 p-4 rounded-lg shadow-md flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h2 className="text-2xl text-purple-600 font-bold">Add Content</h2>
                        <CrossIcon className="w-6 h-6" onClick={onClose} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Input placeholder="Title" onChange={() => { }} value="" />
                        <Input placeholder="Type" onChange={() => { }} value="" />
                        <Input placeholder="Link" onChange={() => { }} value="" />
                    </div>
                    <div className="flex justify-center">
                        <Button varient="primary" text="Submit" onClick={() => { }} />
                    </div>
                </span>

                </div>
        </div>}
    </div>
}



