// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MarkdownLineSvg from '@airclass/icons-svg/lib/asn/MarkdownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MarkdownLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MarkdownLineSvg}></AntdIcon>;
};

MarkdownLine.displayName = 'MarkdownLine';
MarkdownLine.inheritAttrs = false;
export default MarkdownLine;