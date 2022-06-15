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
  useColorModeValue,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { Link as ReachLink } from "react-router-dom";

import { CartDrawer } from "../../components/Cart/CartDrawer";

const Links = [
  { label: "Tienda", url: "/productos" },
  { label: "Nosotros", url: "/nosotros" },
];

const NavLink = ({ text, link }) => (
  <Link
    px={2}
    py={1}
    as={ReachLink}
    to={link}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {text}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <Heading size="md">
          <Link as={ReachLink} to={"/"}>
            Ada Shop
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
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              size="xs"
            >
              <BsPerson size={25} />
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
