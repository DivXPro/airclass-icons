// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeFillSvg from '@airclass/icons-svg/lib/asn/CodeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeFillSvg}></AntdIcon>;
};

CodeFill.displayName = 'CodeFill';
CodeFill.inheritAttrs = false;
export default CodeFill;