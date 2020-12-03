// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ParenthesesFillSvg from '@airclass/icons-svg/lib/asn/ParenthesesFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParenthesesFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ParenthesesFillSvg}></AntdIcon>;
};

ParenthesesFill.displayName = 'ParenthesesFill';
ParenthesesFill.inheritAttrs = false;
export default ParenthesesFill;