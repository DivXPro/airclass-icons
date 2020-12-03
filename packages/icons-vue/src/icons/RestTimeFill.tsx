// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RestTimeFillSvg from '@airclass/icons-svg/lib/asn/RestTimeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestTimeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestTimeFillSvg}></AntdIcon>;
};

RestTimeFill.displayName = 'RestTimeFill';
RestTimeFill.inheritAttrs = false;
export default RestTimeFill;