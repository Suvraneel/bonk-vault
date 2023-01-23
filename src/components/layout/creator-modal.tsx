import { Button, ButtonState } from "@components/home/button";
import React from "react";

type Props = {
  onClick: Function;
  butttonState: ButtonState;
  headerContent: string;
  buttonContent: string;
  id: string;
};

export function CreatorModal({
  onClick,
  butttonState,
  headerContent,
  buttonContent,
  id,
}: Props) {
  const [file, setFile] = React.useState<File | undefined>();
  const [name, setName] = React.useState<string | undefined>();

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="font-bold text-xl mb-2">{headerContent}</h3>
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Upload your Asset</span>
            </label>
            <div className="max-w-xl">
              <label
                className="flex justify-center w-full h-32 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="font-medium text-gray-600">
                    Drop files to Attach, or{" "}
                    <span className="text-blue-600 underline">browse</span>
                  </span>
                </span>
                <input 
                type="file" 
                name="file_upload" 
                className="hidden"
                onChange={(ev)=>{
                  setFile(ev.target.files?.[0]);
                  setName(ev.target.files?.[0].name)
                  console.log(ev.target.files?.[0]);
                }}
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name your Asset</span>
            </label>
            <input
              type="text"
              placeholder={name}
              className="input input-bordered w-full"
              onChange={(ev) => setName(ev.currentTarget.value)}
            />
          </div>
          <div className="modal-action">
            <Button
              state={butttonState}
              onClick={onClick({
                file,
                name,
              })}
              className="btn-primary"
            >
              {buttonContent}
            </Button>
          </div>
        </label>
      </label>
    </>
  );
}
