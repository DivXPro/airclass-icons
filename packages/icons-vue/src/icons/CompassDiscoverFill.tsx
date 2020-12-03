// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CompassDiscoverFillSvg from '@airclass/icons-svg/lib/asn/CompassDiscoverFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassDiscoverFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassDiscoverFillSvg}></AntdIcon>;
};

CompassDiscoverFill.displayName = 'CompassDiscoverFill';
CompassDiscoverFill.inheritAttrs = false;
export default CompassDiscoverFill;