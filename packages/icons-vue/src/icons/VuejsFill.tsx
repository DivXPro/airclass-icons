// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VuejsFillSvg from '@airclass/icons-svg/lib/asn/VuejsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VuejsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VuejsFillSvg}></AntdIcon>;
};

VuejsFill.displayName = 'VuejsFill';
VuejsFill.inheritAttrs = false;
export default VuejsFill;