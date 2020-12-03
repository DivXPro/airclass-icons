// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodepenFillSvg from '@airclass/icons-svg/lib/asn/CodepenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodepenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodepenFillSvg}></AntdIcon>;
};

CodepenFill.displayName = 'CodepenFill';
CodepenFill.inheritAttrs = false;
export default CodepenFill;