// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartAddLineSvg from '@airclass/icons-svg/lib/asn/HeartAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartAddLineSvg}></AntdIcon>;
};

HeartAddLine.displayName = 'HeartAddLine';
HeartAddLine.inheritAttrs = false;
export default HeartAddLine;