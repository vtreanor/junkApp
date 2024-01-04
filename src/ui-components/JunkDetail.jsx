/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function JunkDetail(props) {
  const { junk, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/buynow" });
  return (
    <View
      width="1269px"
      height="722px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "JunkDetail")}
      {...rest}
    >
      <View
        width="626px"
        height="731px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        bottom="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PanelLHS")}
      >
        <Image
          width="506px"
          height="506px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 253px - 57.5px)"
          left="calc(50% - 253px - 33px)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={junk?.image}
          {...getOverrideProps(overrides, "junk-03 1")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="32px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="301px"
          height="57px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="601px"
          left="95px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={junk?.header}
          {...getOverrideProps(overrides, "Header4188444")}
        ></Text>
      </View>
      <View
        width="608px"
        height="722px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        bottom="0px"
        right="35px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "PanelRHS")}
      >
        <Text
          fontFamily="Inter"
          fontSize="64px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="64px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="608px"
          height="87px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="11px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={junk?.header}
          {...getOverrideProps(overrides, "Header4186610")}
        ></Text>
        <View
          width="608px"
          height="503px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 251.5px - 11.5px)"
          left="calc(50% - 304px - 0px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "BodyFrame")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="594px"
            height="492px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="6px"
            left="8px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={junk?.body}
            {...getOverrideProps(overrides, "Body")}
          ></Text>
        </View>
        <Flex
          gap="87px"
          direction="row"
          width="608px"
          height="86px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          position="absolute"
          top="617px"
          left="0px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "BottomFrame")}
        >
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="32px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="182px"
            height="57px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${""}${"\u20AC"}${junk?.price}`}
            {...getOverrideProps(overrides, "Price")}
          ></Text>
          <Button
            width="226px"
            height="73px"
            gap="12px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Buy Now"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </View>
    </View>
  );
}
