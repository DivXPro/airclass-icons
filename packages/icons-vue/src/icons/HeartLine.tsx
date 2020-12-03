// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartLineSvg from '@airclass/icons-svg/lib/asn/HeartLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartLineSvg}></AntdIcon>;
};

HeartLine.displayName = 'HeartLine';
HeartLine.inheritAttrs = false;
export default HeartLine;