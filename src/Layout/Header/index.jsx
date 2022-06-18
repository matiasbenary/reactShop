import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { NavLink as ReachLink } from "react-router-dom";

import { CartDrawer } from "../../components/Cart/CartDrawer";

const Links = [
  { label: "Tienda", url: "/productos" },
  { label: "Nosotros", url: "/nosotros" },
];

const NavLink = ({ text, link }) => {
  return (
    <Link
      px={2}
      py={1}
      as={ReachLink}
      to={link}
      rounded={"md"}
      _hover={{ color: "brand" }}
      style={({ isActive }) => (isActive ? { color: "#A18A68" } : undefined)}
    >
      {text}
    </Link>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box borderBottom="1px solid">
      <Flex minH="75px" alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <Heading size="md" textTransform="capitalize">
          <Link as={ReachLink} to={"/"}>
            AdaShop
          </Link>
        </Heading>

        <Flex alignItems={"center"} gap={5}>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            justify="flex-end"
          >
            {Links.map((link) => (
              <NavLink
                key={`link-${link.label}`}
                text={link.label}
                link={link.url}
              />
            ))}
          </HStack>
          <Text as="span" display={["none", null, "block"]}>
            |
          </Text>
          {/* Carrito */}
          <CartDrawer />
          {/* Menu del usuario */}
          <Menu>
            <MenuButton as={Button} variant="ghost" size="xs">
              <BsPerson size={30} />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={`link${link.label}`}
                text={link.label}
                link={link.url}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
