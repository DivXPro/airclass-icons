// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ParagraphSvg from '@airclass/icons-svg/lib/asn/Paragraph';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Paragraph = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ParagraphSvg}></AntdIcon>;
};

Paragraph.displayName = 'Paragraph';
Paragraph.inheritAttrs = false;
export default Paragraph;