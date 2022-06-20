import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import useUser from "../../../hooks/useUser";
import authModal from "../../../shared/authModal";

const UserOptions = () => {
  const { user, singOutUser } = useUser();

  const setShowModal = useSetRecoilState(authModal);

  if (!user) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <BsPerson size={30} />
      </Button>
    );
  }
  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" size="xs">
        <BsPerson size={30} />
      </MenuButton>
      <MenuList>
        <MenuItem>{user?.user?.username}</MenuItem>
        <MenuItem>
          <Link to="/perfil">Mi datos</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/pedidos">Mis Pedidos</Link>
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => singOutUser()}>Salir</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default UserOptions;
