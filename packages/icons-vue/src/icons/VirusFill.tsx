// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VirusFillSvg from '@airclass/icons-svg/lib/asn/VirusFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VirusFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VirusFillSvg}></AntdIcon>;
};

VirusFill.displayName = 'VirusFill';
VirusFill.inheritAttrs = false;
export default VirusFill;