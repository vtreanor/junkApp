/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function JunkTableRow(props) {
  const { junk, width, overrides, ...rest } = props;
  const deleteButtonOnClick = useNavigateAction({
    type: "url",
    url: `${"/rowdelete/"}${junk?.id}`,
  });
  const editButtonOnClick = useNavigateAction({
    type: "url",
    url: `${"/rowedit/"}${junk?.id}`,
  });
  return (
    <Flex
      gap="21px"
      direction="row"
      width="1440px"
      height="40px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "JunkTableRow")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="102px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(137,137,137,1)"
        padding="3px 3px 3px 3px"
        backgroundColor="rgba(238,238,238,1)"
        {...getOverrideProps(overrides, "RowImageframe")}
      >
        <Image
          width="78px"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={junk?.image}
          {...getOverrideProps(overrides, "Image")}
        ></Image>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="223px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(137,137,137,1)"
        padding="3px 3px 3px 3px"
        backgroundColor="rgba(238,238,238,1)"
        {...getOverrideProps(overrides, "RowHeaderFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={junk?.header}
          {...getOverrideProps(overrides, "RowHeaderText")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="708px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(137,137,137,1)"
        padding="3px 3px 3px 3px"
        backgroundColor="rgba(238,238,238,1)"
        {...getOverrideProps(overrides, "RowBodyFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={junk?.body}
          {...getOverrideProps(overrides, "RowBodyText")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="101px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(137,137,137,1)"
        padding="3px 3px 3px 3px"
        backgroundColor="rgba(238,238,238,1)"
        {...getOverrideProps(overrides, "RowPriceFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={junk?.price}
          {...getOverrideProps(overrides, "RowPriceText")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="100px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(137,137,137,1)"
        padding="3px 3px 3px 3px"
        backgroundColor="rgba(238,238,238,1)"
        {...getOverrideProps(overrides, "RowDateFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={junk?.date}
          {...getOverrideProps(overrides, "RowDateText")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="101px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(137,137,137,1)"
        padding="3px 3px 3px 3px"
        backgroundColor="rgba(238,238,238,1)"
        {...getOverrideProps(overrides, "RowControls")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(238,238,238,1)"
          onClick={() => {
            deleteButtonOnClick();
          }}
          {...getOverrideProps(overrides, "DeleteButton")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="18.33px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, '\uD83E\uDD86 icon "Times"')}
          >
            <Icon
              width="18.33px"
              height="20px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.33333396911621,
                height: 20,
              }}
              paths={[
                {
                  d: "M12.6417 10L17.8536 4.3142C18.4932 3.61648 18.4932 2.48523 17.8536 1.78693L16.6953 0.523295C16.0557 -0.174432 15.0188 -0.174432 14.3786 0.523295L9.16667 6.20909L3.95469 0.523295C3.3151 -0.174432 2.27813 -0.174432 1.63802 0.523295L0.479688 1.78693C-0.159896 2.48466 -0.159896 3.61591 0.479688 4.3142L5.69167 10L0.479688 15.6858C-0.159896 16.3835 -0.159896 17.5148 0.479688 18.2131L1.63802 19.4767C2.2776 20.1744 3.3151 20.1744 3.95469 19.4767L9.16667 13.7909L14.3786 19.4767C15.0182 20.1744 16.0557 20.1744 16.6953 19.4767L17.8536 18.2131C18.4932 17.5153 18.4932 16.3841 17.8536 15.6858L12.6417 10Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector4169562")}
            ></Icon>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(238,238,238,1)"
          onClick={() => {
            editButtonOnClick();
          }}
          {...getOverrideProps(overrides, "EditButton")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="20px"
            height="24.44px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(
              overrides,
              '\uD83E\uDD86 icon "Alternate Pencil"'
            )}
          >
            <Icon
              width="20px"
              height="24.44px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20,
                height: 24.444602966308594,
              }}
              paths={[
                {
                  d: "M19.4492 6.78102L17.6483 8.98208C17.4647 9.20648 17.1678 9.20648 16.9842 8.98208L12.6481 3.68235C12.4645 3.45795 12.4645 3.09509 12.6481 2.87068L14.449 0.669627C15.1795 -0.223209 16.367 -0.223209 17.1014 0.669627L19.4492 3.53912C20.1836 4.43195 20.1836 5.88341 19.4492 6.78102ZM11.1012 4.7614L0.842864 17.2993L0.0147001 23.1004C-0.0985864 23.8834 0.460033 24.5614 1.10069 24.4277L5.847 23.4107L16.1053 10.8728C16.2889 10.6484 16.2889 10.2855 16.1053 10.0611L11.7692 4.7614C11.5816 4.53699 11.2848 4.53699 11.1012 4.7614ZM4.84696 16.225C4.6321 15.9624 4.6321 15.5423 4.84696 15.2797L10.8629 7.92691C11.0777 7.66431 11.4215 7.66431 11.6363 7.92691C11.8512 8.18951 11.8512 8.60966 11.6363 8.87226L5.62043 16.225C5.40557 16.4876 5.06181 16.4876 4.84696 16.225ZM3.43673 20.2404L5.31182 20.2404L5.31182 21.9736L2.79217 22.5131L1.57727 21.0282L2.0187 17.9486L3.43673 17.9486L3.43673 20.2404Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector4169565")}
            ></Icon>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
