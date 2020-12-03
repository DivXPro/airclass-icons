// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DislikeFillSvg from '@airclass/icons-svg/lib/asn/DislikeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DislikeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeFillSvg}></AntdIcon>;
};

DislikeFill.displayName = 'DislikeFill';
DislikeFill.inheritAttrs = false;
export default DislikeFill;