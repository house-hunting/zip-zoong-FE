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
  roomArea: yup.string().required("선택은 필수입니다"),
  deposit: yup.string().required("선택은 필수입니다"),
  month: yup.string().required("선택은 필수입니다"),
  // cost:yup.string().required("선택은 필수입니다"),
  // parking: yup.string().required("선택은 필수입니다"),
  title: yup.string().required("선택은 필수입니다"),
  textArea: yup.string().required("선택은 필수입니다"),
});
export type RegiFormDatas = yup.InferType<typeof RegisterSchema>;
