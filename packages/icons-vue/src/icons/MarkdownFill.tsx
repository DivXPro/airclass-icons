// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MarkdownFillSvg from '@airclass/icons-svg/lib/asn/MarkdownFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MarkdownFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MarkdownFillSvg}></AntdIcon>;
};

MarkdownFill.displayName = 'MarkdownFill';
MarkdownFill.inheritAttrs = false;
export default MarkdownFill;