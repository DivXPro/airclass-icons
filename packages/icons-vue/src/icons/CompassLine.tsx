// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CompassLineSvg from '@airclass/icons-svg/lib/asn/CompassLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassLineSvg}></AntdIcon>;
};

CompassLine.displayName = 'CompassLine';
CompassLine.inheritAttrs = false;
export default CompassLine;