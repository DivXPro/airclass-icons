// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DislikeLineSvg from '@airclass/icons-svg/lib/asn/DislikeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DislikeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeLineSvg}></AntdIcon>;
};

DislikeLine.displayName = 'DislikeLine';
DislikeLine.inheritAttrs = false;
export default DislikeLine;