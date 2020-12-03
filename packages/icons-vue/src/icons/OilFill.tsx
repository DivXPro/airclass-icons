// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OilFillSvg from '@airclass/icons-svg/lib/asn/OilFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OilFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OilFillSvg}></AntdIcon>;
};

OilFill.displayName = 'OilFill';
OilFill.inheritAttrs = false;
export default OilFill;