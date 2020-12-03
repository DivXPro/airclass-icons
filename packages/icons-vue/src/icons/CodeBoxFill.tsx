// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeBoxFillSvg from '@airclass/icons-svg/lib/asn/CodeBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeBoxFillSvg}></AntdIcon>;
};

CodeBoxFill.displayName = 'CodeBoxFill';
CodeBoxFill.inheritAttrs = false;
export default CodeBoxFill;