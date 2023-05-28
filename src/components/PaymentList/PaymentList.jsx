import { Payment } from "./PaymentList.js";
import { paymentMethods } from "../../constants/index.js";
import Image from "next/image.js";
const PaymentList = () => {
  return (
    <Payment>
      {paymentMethods &&
        paymentMethods.map(({ id, icon }) => {
          return (
            <li key={id}>
              <Image src={icon} alt={id} width={34} height={20} />
            </li>
          );
        })}
    </Payment>
  );
};
export default PaymentList;
