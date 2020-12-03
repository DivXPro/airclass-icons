// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CompassDiscoverLineSvg from '@airclass/icons-svg/lib/asn/CompassDiscoverLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassDiscoverLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassDiscoverLineSvg}></AntdIcon>;
};

CompassDiscoverLine.displayName = 'CompassDiscoverLine';
CompassDiscoverLine.inheritAttrs = false;
export default CompassDiscoverLine;