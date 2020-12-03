// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HotspotFillSvg from '@airclass/icons-svg/lib/asn/HotspotFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HotspotFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HotspotFillSvg}></AntdIcon>;
};

HotspotFill.displayName = 'HotspotFill';
HotspotFill.inheritAttrs = false;
export default HotspotFill;