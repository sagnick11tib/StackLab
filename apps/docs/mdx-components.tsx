import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";

import {
  Accordion,
  AccordionGroup,
  Card,
  Columns,
} from "@/components/mdx/shims";
import { Tab, Tabs } from "@/components/mdx/tabs";

type ThemeComponentsOutput = ReturnType<typeof getThemeComponents> &
  Record<string, unknown>;

export function useMDXComponents(components: Record<string, unknown> = {}) {
  return {
    ...getThemeComponents(),
    Accordion,
    AccordionGroup,
    Card,
    Columns,
    Tab,
    Tabs,
    ...components,
  } as ThemeComponentsOutput;
}
