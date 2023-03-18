import React from 'react';
import { Button } from 'native-base';
import type { PropsWithChildren } from 'react';

type PropType = PropsWithChildren<{
  content: string;
}>;

const TemplateButton = ({ content }: PropType): JSX.Element => {
  return <Button>{content}</Button>;
};

export default TemplateButton;
