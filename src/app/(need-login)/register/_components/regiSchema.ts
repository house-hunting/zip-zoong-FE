import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  roomType: yup.string().required("선택은 필수입니다"),
  roomInfo: yup.string().required("선택은 필수입니다"),
  cost: yup.string().required("선택은 필수입니다"),
  selectDate: yup.string().required("선택은 필수입니다"),
  elevator: yup.string().required("선택은 필수입니다"),
  rentType: yup.string().required("선택은 필수입니다"),
  parking: yup.string().required("선택은 필수입니다"),

  totalFloors: yup.string().required("층 수 선택은 필수입니다"),
  floorsNumber: yup.string().required("층 수 선택은 필수입니다"),

  address: yup.string().required("주소 입력은 필수입니다"),
  roomArea: yup.number().required("평수를 입력해주세요").typeError("숫자로 입력해주세요."),
  deposit: yup.number().required("보증금을 입력해주세요").typeError("숫자로 입력해주세요."),
  month: yup.number().required("월세를 입력해주세요").typeError("숫자로 입력해주세요."),
  roomCost: yup.number().required("관리비를 입력해주세요").typeError("숫자로 입력해주세요."),
  parkingCost: yup.number().required("주차비를 입력해주세요").typeError("숫자로 입력해주세요."),
  title: yup.string().required("제목은 필수입니다"),
  textArea: yup.string().required("내용은 필수로 적어주세요"),

  datePicker: yup.date().required("날짜를 필수로 입력해주세요"),
  roomImage: yup.string().url("잘못된 이미지 URL 형식입니다").required("사진을 올려주세요"),
});
export type RegiFormDatas = yup.InferType<typeof RegisterSchema>;
