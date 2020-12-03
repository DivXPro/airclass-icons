// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HotspotLineSvg from '@airclass/icons-svg/lib/asn/HotspotLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HotspotLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HotspotLineSvg}></AntdIcon>;
};

HotspotLine.displayName = 'HotspotLine';
HotspotLine.inheritAttrs = false;
export default HotspotLine;