// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VipCrownLineSvg from '@airclass/icons-svg/lib/asn/VipCrownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VipCrownLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VipCrownLineSvg}></AntdIcon>;
};

VipCrownLine.displayName = 'VipCrownLine';
VipCrownLine.inheritAttrs = false;
export default VipCrownLine;