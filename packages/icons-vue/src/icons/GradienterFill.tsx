// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GradienterFillSvg from '@airclass/icons-svg/lib/asn/GradienterFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GradienterFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GradienterFillSvg}></AntdIcon>;
};

GradienterFill.displayName = 'GradienterFill';
GradienterFill.inheritAttrs = false;
export default GradienterFill;