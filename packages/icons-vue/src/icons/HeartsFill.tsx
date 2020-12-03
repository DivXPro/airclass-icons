// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartsFillSvg from '@airclass/icons-svg/lib/asn/HeartsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartsFillSvg}></AntdIcon>;
};

HeartsFill.displayName = 'HeartsFill';
HeartsFill.inheritAttrs = false;
export default HeartsFill;