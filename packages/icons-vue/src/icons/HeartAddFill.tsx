// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartAddFillSvg from '@airclass/icons-svg/lib/asn/HeartAddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartAddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartAddFillSvg}></AntdIcon>;
};

HeartAddFill.displayName = 'HeartAddFill';
HeartAddFill.inheritAttrs = false;
export default HeartAddFill;