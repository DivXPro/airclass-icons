// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ForbidLineSvg from '@airclass/icons-svg/lib/asn/ForbidLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ForbidLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForbidLineSvg}></AntdIcon>;
};

ForbidLine.displayName = 'ForbidLine';
ForbidLine.inheritAttrs = false;
export default ForbidLine;