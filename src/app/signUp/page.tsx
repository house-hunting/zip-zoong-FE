export default function SignUp() {
  return (
    <form className="flex justify-center items-center h-screen">
      <div className="border w-25 flex justify-center items-center rounded-md p-5 flex-col px-9">
        <div className="flex flex-col items-center text-md py-10">
          <span>간편하게 로그인 하고</span>
          <span className=" font-extraBold">다양한 서비스를 즐기세요.</span>
        </div>
        <div className="py-4">
          <input className="border w-full p-3 my-3" placeholder="이메일 주소" type="text" />
          <input className="border w-full p-3 my-3" placeholder="비밀번호" type="password" />
          <input className="border w-full p-3 my-3" placeholder="비밀번호 확인" type="password" />
        </div>
        <button className="w-full h-12 mt-24 bg-primary-200 text-white font-bold hover:bg-hover">
          가입하기
        </button>
      </div>
    </form>
  );
}
