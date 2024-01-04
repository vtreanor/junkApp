/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function JunkProductCard(props) {
  const { junk, overrides, ...rest } = props;
  const avatarOneOnClick = useNavigateAction({ type: "url", url: "/" });
  const headerOnClick = useNavigateAction({
    type: "url",
    url: "https://google.com",
  });
  return (
    <View
      width="380px"
      height="624px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(172,172,172,1)"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "JunkProductCard")}
      {...rest}
    >
      <Image
        width="calc(100% - 0px)"
        height="calc(100% - 374px)"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="374px"
        left="0px"
        right="0px"
        border="1px SOLID rgba(144,0,0,0.6)"
        borderRadius="20px 20px 0px 0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={junk?.image}
        onClick={() => {
          avatarOneOnClick();
        }}
        {...getOverrideProps(overrides, "avatar 1")}
      ></Image>
      <View
        width="352px"
        height="230px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        bottom="106px"
        left="calc(50% - 176px - -2px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="38.727272033691406px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="191px"
          height="40px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="-1px"
          bottom="191px"
          left="81px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          className="header"
          children={junk?.header}
          onClick={() => {
            headerOnClick();
          }}
          {...getOverrideProps(overrides, "Header")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="29.045454025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="352px"
          height="132px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="78px"
          bottom="20px"
          left="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={junk?.body}
          {...getOverrideProps(overrides, "body")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="218px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="534px"
        bottom="61px"
        left="81px"
        right="81px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={junk?.price}
        {...getOverrideProps(overrides, "Price")}
      ></Text>
    </View>
  );
}
