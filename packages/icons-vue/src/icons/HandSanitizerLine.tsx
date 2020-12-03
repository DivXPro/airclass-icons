// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HandSanitizerLineSvg from '@airclass/icons-svg/lib/asn/HandSanitizerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HandSanitizerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HandSanitizerLineSvg}></AntdIcon>;
};

HandSanitizerLine.displayName = 'HandSanitizerLine';
HandSanitizerLine.inheritAttrs = false;
export default HandSanitizerLine;