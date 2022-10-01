import React from "react";
import {Column, Stack, Row, Text, Button, List, Line, Img} from "../../components";

const MacBookPro16OnePage = () => {
  return (
    <>
      <Column className="bg-orange_50 font-inter mx-[auto] pb-[1px] pl-[1px] w-[100%]">
        <Column className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:pl-[17px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] w-[99%]">
          <Stack className="3xl:h-[1050px] lg:h-[680px] xl:h-[778px] 2xl:h-[875px] w-[100%]">
            <Column className="absolute left-[2%] top-[6%] w-[61%]">
              <Row className="justify-between lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[97%]">
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
                  In-Progress
                </Text>
                <Text className="font-normal lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[20px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
                  [Next Semester]
                </Text>
              </Row>
              <Text className="font-normal lg:mt-[212px] xl:mt-[243px] 2xl:mt-[273px] 3xl:mt-[328px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[auto]">
                Hours: 14
              </Text>
            </Column>
            <Stack className="absolute 3xl:h-[1050px] lg:h-[680px] xl:h-[778px] 2xl:h-[875px] w-[100%]">
              <Row className="absolute bottom-[0] inset-x-[0] justify-between mx-[auto] w-[99%]">
                <Stack className="lg:h-[601px] xl:h-[688px] 2xl:h-[774px] 3xl:h-[928px] w-[96%]">
                  <Column className="absolute bottom-[0] w-[100%]">
                    <Column className="items-center w-[23%]">
                      <Row className="items-center justify-between w-[99%]">
                        <Button
                          className="font-normal not-italic lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[28px] text-center w-[44%]"
                          variant="FillDeeporangeA100"
                        >
                          ENGL 1001
                        </Button>
                        <Text className="bg-deep_orange_A100 font-normal not-italic pl-[2px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[22px] rounded-radius10 lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[28px] text-black_900 w-[159px]">
                          MATH 1552
                        </Text>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[99%]">
                        <Text className="bg-deep_orange_A100 font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[16px] xl:pl-[3px] lg:pl-[3px] 2xl:pl-[4px] 3xl:pl-[5px] lg:pt-[16px] xl:pt-[18px] 2xl:pt-[20px] 3xl:pt-[25px] rounded-radius10 lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[159px]">
                          CSC 1351
                        </Text>
                        <Text className="bg-deep_orange_A100 font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[16px] pl-[4px] pr-[1px] lg:pt-[16px] xl:pt-[18px] 2xl:pt-[20px] 3xl:pt-[25px] rounded-radius10 lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[159px]">
                          CSC 2259
                        </Text>
                      </Row>
                    </Column>
                    <Button
                      className="font-normal xl:ml-[1064px] 2xl:ml-[1197px] 3xl:ml-[1436px] lg:ml-[930px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[73px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-center w-[8%]"
                      size="sm"
                      variant="FillGray500"
                    >
                      submit
                    </Button>
                    <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[151px] 3xl:h-[182px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[100%]">
                      <Column className="absolute left-[2%] top-[6%] w-[90%]">
                        <Text className="font-normal lg:ml-[407px] xl:ml-[466px] 2xl:ml-[524px] 3xl:ml-[629px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                          Avaliable classes{" "}
                        </Text>
                        <Row className="3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[100%]">
                          <List
                            className="lg:gap-[34px] xl:gap-[39px] 2xl:gap-[44px] 3xl:gap-[53px] grid grid-cols-3 min-h-[auto] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[41%]"
                            orientation="horizontal"
                          >
                            <Row className="bg-bluegray_200 mt-[2px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[100%]">
                              <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 w-[auto]">
                                GEN ED HUMANITY{" "}
                              </Text>
                              <Line className="bg-black_900 lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[3px] w-[1px]" />
                              <Column className="items-center 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[12%]">
                                <Img
                                  src="images/img_polygon1.svg"
                                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] w-[100%]"
                                  alt="PolygonOne"
                                />
                                <Img
                                  src="images/img_polygon1.svg"
                                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]"
                                  alt="PolygonTwo"
                                />
                              </Column>
                            </Row>
                            <Row className="bg-bluegray_200 mb-[2px] p-[3px] rounded-radius10 w-[100%]">
                              <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[auto]">
                                Gen Art{" "}
                              </Text>
                              <Line className="bg-black_900 lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] 2xl:mb-[10px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[1px]" />
                              <Column className="items-center 2xl:mb-[10px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[12%]">
                                <Img
                                  src="images/img_polygon1.svg"
                                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] w-[100%]"
                                  alt="PolygonOne One"
                                />
                                <Img
                                  src="images/img_polygon1.svg"
                                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]"
                                  alt="PolygonTwo One"
                                />
                              </Column>
                            </Row>
                            <Row className="bg-bluegray_200 items-end justify-between mt-[2px] p-[2px] rounded-radius10 w-[100%]">
                              <Text className="font-normal lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                                Tech Elective A
                              </Text>
                              <Line className="bg-black_900 lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[50px] xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[1px]" />
                              <Column className="items-center xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[14px] lg:mb-[9px] mr-[4px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[12%]">
                                <Img
                                  src="images/img_polygon1.svg"
                                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] w-[100%]"
                                  alt="PolygonOne Two"
                                />
                                <Img
                                  src="images/img_polygon1.svg"
                                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]"
                                  alt="PolygonTwo Two"
                                />
                              </Column>
                            </Row>
                          </List>
                          <Column className="bg-bluegray_200 items-center lg:ml-[44px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[68px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] p-[1px] rounded-radius10 w-[11%]">
                            <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] not-italic lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[28px] text-black_900 w-[auto]">
                              ENGL 2000
                            </Text>
                          </Column>
                          <Column className="bg-bluegray_200 items-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[38px] mt-[4px] p-[1px] rounded-radius10 w-[11%]">
                            <Text className="font-normal lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[20px] not-italic lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[28px] text-black_900 w-[auto]">
                              MATH 2090
                            </Text>
                          </Column>
                          <List
                            className="lg:gap-[25px] xl:gap-[29px] 2xl:gap-[32px] 3xl:gap-[39px] grid grid-cols-2 min-h-[auto] lg:ml-[36px] xl:ml-[42px] 2xl:ml-[47px] 3xl:ml-[57px] w-[25%]"
                            orientation="horizontal"
                          >
                            <Column className="bg-red_300 items-center justify-end p-[4px] rounded-radius10 w-[100%]">
                              <Text className="font-normal 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[auto]">
                                CSC 3102
                              </Text>
                            </Column>
                            <Column className="bg-red_300 items-center justify-end p-[4px] rounded-radius10 w-[100%]">
                              <Text className="font-normal 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[auto]">
                                CSC 3501
                              </Text>
                            </Column>
                          </List>
                        </Row>
                      </Column>
                      <Img
                        src="images/img_line2.svg"
                        className="absolute lg:h-[118px] xl:h-[135px] 2xl:h-[151px] 3xl:h-[182px] w-[100%]"
                        alt="LineTwo"
                      />
                    </Stack>
                    <Row className="justify-center lg:ml-[272px] xl:ml-[312px] 2xl:ml-[351px] 3xl:ml-[421px] lg:mt-[60px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[93px] rounded-radius10 w-[49%]">
                      <Text className="bg-bluegray_100 font-normal my-[2px] not-italic lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] lg:pt-[15px] xl:pt-[17px] 2xl:pt-[20px] 3xl:pt-[24px] rounded-radius10 lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[159px]">
                        CSC 2262
                      </Text>
                      <Text className="bg-bluegray_100 font-normal lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] mt-[4px] not-italic lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pr-[3px] lg:pt-[15px] xl:pt-[17px] 2xl:pt-[20px] 3xl:pt-[24px] rounded-radius10 lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[159px]">
                        CSC 3200
                      </Text>
                      <Text className="bg-bluegray_100 font-normal mb-[4px] lg:ml-[29px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] not-italic lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pr-[1px] lg:pt-[15px] xl:pt-[17px] 2xl:pt-[20px] 3xl:pt-[24px] rounded-radius10 lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[159px]">
                        CSC 3304
                      </Text>
                      <Text className="bg-bluegray_100 font-normal mb-[4px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] not-italic lg:pb-[11px] xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[17px] pr-[2px] lg:pt-[15px] xl:pt-[17px] 2xl:pt-[20px] 3xl:pt-[24px] rounded-radius10 lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[159px]">
                        CSC 3380
                      </Text>
                    </Row>
                    <Row className="justify-center lg:ml-[298px] xl:ml-[341px] 2xl:ml-[384px] 3xl:ml-[461px] 3xl:mt-[118px] lg:mt-[76px] xl:mt-[87px] 2xl:mt-[98px] w-[44%]">
                      <Text className="bg-light_green_200 font-normal mt-[4px] not-italic lg:pb-[16px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[25px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] lg:pt-[13px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[21px] rounded-radius10 lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[28px] text-black_900 w-[159px]">
                        ASTR 1101
                      </Text>
                      <Text className="bg-light_green_200 font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] my-[2px] not-italic lg:pb-[16px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[25px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] lg:pt-[13px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[21px] rounded-radius10 lg:text-[18px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[28px] text-black_900 w-[159px]">
                        MATH 1550
                      </Text>
                      <Button className="font-normal mb-[4px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-center w-[22%]">
                        CSC 1350
                      </Button>
                      <Button className="font-normal mb-[4px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-center w-[22%]">
                        BIO 1001
                      </Button>
                    </Row>
                  </Column>
                  <Column className="absolute bottom-[11%] inset-x-[0] items-center mx-[auto] w-[98%]">
                    <Text className="font-normal not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_900 w-[auto]">
                      Classes Blocked by Prereqs
                    </Text>
                    <Text className="font-normal lg:mt-[100px] xl:mt-[114px] 2xl:mt-[129px] 3xl:mt-[155px] not-italic lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-black_900 w-[auto]">
                      Completed
                    </Text>
                    <Line className="bg-black_900 h-[2px] mt-[4px] w-[100%]" />
                  </Column>
                  <Line className="absolute bg-black_900 lg:h-[246px] xl:h-[281px] 2xl:h-[317px] 3xl:h-[380px] left-[24%] top-[0] w-[1px]" />
                </Stack>
                <Text className="font-normal leading-[normal] 2xl:mt-[111px] 3xl:mt-[134px] lg:mt-[86px] xl:mt-[99px] not-italic rotate-[90deg] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[3%]">
                  Software Engineering (CSC SEG)
                </Text>
              </Row>
              <Img
                src="images/img_hackicon1.png"
                className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] right-[0] top-[0] w-[30%]"
                alt="hackIconOne"
              />
            </Stack>
          </Stack>
        </Column>
        <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
          *taken from the 2023 catalogue{" "}
        </Text>
      </Column>
    </>
  );
};

export default MacBookPro16OnePage;
