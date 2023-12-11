export default function UploadFile() {
  return (
    <div className="border-y border-b-black grid grid-cols-6 justify-between">
      <div className="flex justify-center items-center border">
        <div>사진 등록</div>
      </div>
      <div className="col-span-2 p-5">
        <label htmlFor="fileInput" className="cursor-pointer p-2 rounded-md bg-black text-white">
          + 사진 추가
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </label>
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
}
