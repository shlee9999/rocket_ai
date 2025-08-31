import { Row } from "@/types/SajuTable";

// 사주 테이블 컬럼 헤더
export const sajuColumns = ["時", "日", "月", "年"]; // 상단 열 헤더

// 사주 테이블 데이터
export const sajuData = [
  {
    rowHeader: { chinese: "十星", korean: "십성" },
    values: [
      { chinese: "傷官", korean: "상관" },
      { chinese: "比肩", korean: "비견" },
      { chinese: "傷官", korean: "상관" },
      { chinese: "傷官", korean: "상관" },
    ],
  },
  {
    rowHeader: { chinese: "天干", korean: "천간" },
    values: [
      {
        chinese: "壬",
        korean: "임",
        subChinese: "陽水",
        variant: "visual",
        color: "black",
      },
      {
        chinese: "丁",
        korean: "정",
        subChinese: "陰火",
        variant: "visual",
        color: "red",
      },
      {
        chinese: "癸",
        korean: "계",
        subChinese: "陰水",
        variant: "visual",
        color: "black",
      },
      {
        chinese: "癸",
        korean: "계",
        subChinese: "陰水",
        variant: "visual",
        color: "black",
      },
    ],
  },
  {
    rowHeader: { chinese: "地支", korean: "지지" },
    values: [
      {
        chinese: "寅",
        korean: "인",
        subChinese: "陽水",
        variant: "visual",
        color: "blueGreen",
      },
      {
        chinese: "巳",
        korean: "사",
        subChinese: "陰火",
        variant: "visual",
        color: "black",
      },
      {
        chinese: "亥",
        korean: "해",
        subChinese: "陰水",
        variant: "visual",
        color: "black",
      },
      {
        chinese: "酉",
        korean: "유",
        subChinese: "陰金",
        variant: "visual",
        color: "white",
      },
    ],
  },
  {
    rowHeader: { chinese: "十星", korean: "지지" },
    values: [
      { chinese: "比肩", korean: "비견" },
      { chinese: "劫財", korean: "겁재" },
      { chinese: "食神", korean: "식신" },
      { chinese: "偏財", korean: "편재" },
    ],
  },
  {
    rowHeader: {
      chinese: "十二運星",
      korean: "12운성",
      classNameChinese: "font-size-3xs",
    },
    values: [
      { chinese: "死", korean: "사" },
      { chinese: "帝旺", korean: "제왕" },
      { chinese: "胎", korean: "태" },
      { chinese: "長生", korean: "장생" },
    ],
  },
  {
    rowHeader: {
      chinese: "十二神殺",
      korean: "십이신살",
      classNameChinese: "font-size-3xs",
    },
    values: [
      { chinese: "劫殺", korean: "겁살" },
      { chinese: "地劫", korean: "지겁" },
      { chinese: "驛馬", korean: "역마" },
      { chinese: "將星", korean: "장성" },
    ],
  },
  {
    rowHeader: { chinese: "貴人", korean: "귀인" },
    values: [
      { chinese: "", korean: "" },
      { chinese: "", korean: "" },
      { chinese: "天乙", korean: "천을귀인" },
      [
        { chinese: "天乙", korean: "천을귀인" },
        { chinese: "太極", korean: "태극귀인" },
        { chinese: "文昌", korean: "문창귀인" },
      ],
    ],
  },
] satisfies Row[];
