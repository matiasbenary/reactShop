import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { NavLink as ReachLink } from "react-router-dom";

import { CartDrawer } from "../../components/Cart/CartDrawer";
import UserOptions from "./Components/UserOptions";

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
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box borderBottom="1px solid">
      <Flex minH="75px" alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          ml={2}
          onClick={isOpen ? onClose : onOpen}
        />

        <Heading size="md" textTransform="capitalize">
          <Link as={ReachLink} to={"/"}>
            AdaShop
          </Link>
        </Heading>

        <Flex alignItems={"center"} gap={{ base: 1, lg: 3 }}>
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
          <Icon
            as={colorMode === "dark" ? RiSunLine : RiMoonLine}
            onClick={toggleColorMode}
            w={6}
            h={6}
            role="button"
          />
          {/* Carrito */}
          <CartDrawer />
          {/* Menu del usuario */}
          <UserOptions />
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
