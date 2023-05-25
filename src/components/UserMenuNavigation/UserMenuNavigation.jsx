import Link from "next/link.js";
import { UserLinks } from "../../constants";
import { BtnWrapper, Arrow, UserList } from "./UserMenuNavigation.js";
import CloseCircleBtn from "../CloseCircleBtn/CloseCircleBtn.jsx";

const UserMenuNavigation = ({ isOpenUserList, handleToggleUserList }) => {
  return (
    <UserList isOpenUserList={isOpenUserList}>
      <Arrow />
      <BtnWrapper>
        <CloseCircleBtn type="button" handleClick={handleToggleUserList} />
      </BtnWrapper>
      {UserLinks &&
        UserLinks.map(({ name, id, path }) => {
          return (
            <li key={id}>
              <Link href={path}>{name}</Link>
            </li>
          );
        })}
    </UserList>
  );
};
export default UserMenuNavigation;
