// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RewindLineSvg from '@airclass/icons-svg/lib/asn/RewindLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RewindLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RewindLineSvg}></AntdIcon>;
};

RewindLine.displayName = 'RewindLine';
RewindLine.inheritAttrs = false;
export default RewindLine;