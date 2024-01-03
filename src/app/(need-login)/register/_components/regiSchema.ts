import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  roomType: yup.string().required("선택은 필수입니다"),
  address: yup.string().min(0).required("주소를 입력해주세요"),
  addressDetail: yup.string().required("상세주소를 입력해주세요"),
  roomArea: yup.number().required("평수를 입력해주세요").typeError("숫자로 입력해주세요."),
  roomInfo: yup.string().required("선택은 필수입니다"),

  rentType: yup.string().required("선택은 필수입니다"),
  deposit: yup.number().required("보증금을 입력해주세요").typeError("숫자로 입력해주세요."),
  month: yup.number().required("월세를 입력해주세요").typeError("숫자로 입력해주세요."),
  cost: yup.boolean().required("선택은 필수입니다"),
  roomCost: yup.number().required("관리비를 입력해주세요").typeError("숫자로 입력해주세요."),

  selectDate: yup.boolean().required("선택은 필수입니다"),
  datePicker: yup.date().required("날짜를 필수로 입력해주세요"),

  totalFloors: yup.string().required("층 수 선택은 필수입니다"),
  floorsNumber: yup.string().required("층 수 선택은 필수입니다"),

  elevator: yup.boolean().required("선택은 필수입니다"),
  parking: yup.boolean().required("선택은 필수입니다"),
  parkingCost: yup.number().required("주차비를 입력해주세요").typeError("숫자로 입력해주세요."),

  roomImage: yup.string().required("사진을 올려주세요"),

  // roomImage: yup
  //   .array()
  //   .of(yup.string().url("Invalid URL format"))
  //   .required("Please select at least one image"),

  title: yup.string().required("제목은 필수입니다"),
  textArea: yup.string().required("내용은 필수로 적어주세요"),
});
export type RegiFormDatas = yup.InferType<typeof RegisterSchema>;
