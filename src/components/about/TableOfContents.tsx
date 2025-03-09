"use client";

import React from "react";
import { Column, Flex, Text } from "@/once-ui/components";
import styles from "./about.module.scss";
import { about } from "@/app/resources/content";

interface TableOfContentsProps {
  items: {
    title: string;
    id: string;
    display: boolean;
  }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      hide="m"
    >
      {items.map((section, sectionIndex) => (
        <Column key={sectionIndex} gap="12">
          <Flex
            cursor="interactive"
            className={styles.hover}
            gap="8"
            vertical="center"
            onClick={() => scrollTo(section.id, 80)}
          >
            <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
            <Text>{section.title}</Text>
          </Flex>
        </Column>
      ))}
    </Column>
  );
};

export default TableOfContents;
