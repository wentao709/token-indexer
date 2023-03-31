import { Flex, Heading, Box, Input, Button } from "@chakra-ui/react";
import { ConnectButton } from "@web3uikit/web3";

function Header({ setUserAddress, getTokensBalance }) {
  return (
    <Box borderBottom={"1px solid #e7eaf3"} bg={"white"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        h={"100px"}
        padding={"30px 100px"}
      >
        <Heading m={0} fontSize={36} p={0}>
          Token Indexer
        </Heading>
        <Flex gap={"20px"}>
          <Input
            onChange={(e) => setUserAddress(e.target.value)}
            borderRadius={"10px"}
            color="black"
            w="500px"
            p={4}
            borderColor={"#000"}
            paddingLeft={"15px"}
            bgColor="white"
            fontSize={18}
            h={40}
            placeholder={"Paste an address or ENS here"}
          />
          <Button
            fontSize={20}
            height={"40px"}
            color={"#fff"}
            onClick={() => getTokensBalance()}
            bgColor="#3498db"
          >
            Search
          </Button>
        </Flex>
        <Flex w={"320px"} justifyContent={"flex-end"}>
          <ConnectButton moralisAuth={false} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
