export default function Register() {
  return (
    <div className="flex justify-center items-center flex-col p-20">
      <div className="font-bold text-big m-20">내집 내놓기</div>
      <ul className="list-disc flex flex-col w-4/6 ml-10 font-semibold leading-8">
        <li>전/월세 매물만 등록할 수 있습니다.</li>
        <li>임대인과 퇴실 협의 후 작성 해주시길 바랍니다.</li>
        <li>내놓으시려는 집의 계약서를 참고하여 작성하시면 원활하게 작성 가능합니다.</li>
        <li>본인 명의로 계약 된 집이 아닌경우 계약 명의자의 출석이 요구될 수 있습니다.</li>
        <li>금액 및 옵션 등 정확한 정보를 입력 바랍니다.</li>
      </ul>
      <div className=" bg-red-500 flex justify-center items-center flex-col w-4/6">
        <div className="grid grid-cols-2">
          <div className="flex">
            <div>매물 유형</div>
            <div>
              <span>원룸</span>
              <span>투룸</span>
            </div>
          </div>
          <div className="flex">
            <div>매물 주소</div>
            <div>
              <span>주소 검색</span>
              <div>
                <input placeholder="예) 000동 00-0, 00구 00동" />
                <button>검색</button>
              </div>
              <input placeholder="상세주소 입력" />
            </div>
          </div>
          <div>
            <div>방 정보</div>
            <div>
              <div>전용 면적</div>
              <div>
                <div>
                  <input placeholder="평수 입력" />
                  <span>평</span>
                </div>
                <div>
                  <span>오픈형</span>
                  <span>분리형</span>
                  <span>복층형</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
