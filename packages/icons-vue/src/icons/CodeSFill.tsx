// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeSFillSvg from '@airclass/icons-svg/lib/asn/CodeSFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeSFillSvg}></AntdIcon>;
};

CodeSFill.displayName = 'CodeSFill';
CodeSFill.inheritAttrs = false;
export default CodeSFill;