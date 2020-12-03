// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LuggageCartLineSvg from '@airclass/icons-svg/lib/asn/LuggageCartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LuggageCartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LuggageCartLineSvg}></AntdIcon>;
};

LuggageCartLine.displayName = 'LuggageCartLine';
LuggageCartLine.inheritAttrs = false;
export default LuggageCartLine;