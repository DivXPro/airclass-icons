// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LuggageCartFillSvg from '@airclass/icons-svg/lib/asn/LuggageCartFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LuggageCartFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LuggageCartFillSvg}></AntdIcon>;
};

LuggageCartFill.displayName = 'LuggageCartFill';
LuggageCartFill.inheritAttrs = false;
export default LuggageCartFill;