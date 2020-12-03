// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CompassesLineSvg from '@airclass/icons-svg/lib/asn/CompassesLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassesLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassesLineSvg}></AntdIcon>;
};

CompassesLine.displayName = 'CompassesLine';
CompassesLine.inheritAttrs = false;
export default CompassesLine;